const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081';

export const setCookie = (name: string, value: string, days: number = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
};

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const sanitizeInput = (input: string): string => {
  return input.replace(/[<>\"'&]/g, (char) => {
    const entities: { [key: string]: string } = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;',
    };
    return entities[char];
  });
};

export const authAPI = {
  register: async (data: {
    email: string;
    password: string;
    fname: string;
    sname: string;
    phone: string;
  }) => {
    const sanitizedData = {
      email: sanitizeInput(data.email),
      password: data.password,
      fname: sanitizeInput(data.fname),
      sname: sanitizeInput(data.sname),
      phone: sanitizeInput(data.phone),
      userType: 'PATIENT',
    };

    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-from-ems': 'true',
      },
      body: JSON.stringify(sanitizedData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    return response.json();
  },

  login: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: sanitizeInput(email),
        password,
        userType: 'PATIENT',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Invalid email or password. Please try again.');
    }

    return response.json();
  },

  getUser: async (token: string) => {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    return response.json();
  },

  resetPassword: async (email: string) => {
    const response = await fetch(`${API_URL}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: sanitizeInput(email),
        userType: 'PATIENT',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send reset email');
    }

    return response.json();
  },

  verifyResetPassword: async (signature: string, password: string) => {
    const response = await fetch(`${API_URL}/reset-password/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ signature, password, userType: 'PATIENT' }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to reset password');
    }

    return response.json();
  },

  updatePatientAddress: async (userId: string, address: string, postalcode: string, token: string) => {
    const response = await fetch(`${API_URL}/record/patient/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ address, postalcode }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update address');
    }

    return response.json();
  },
};
