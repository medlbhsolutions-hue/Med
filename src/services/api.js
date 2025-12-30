import axios from 'axios';
import { supabase } from '../supabaseClient';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (email, password) => api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout'),
  getCurrentUser: () => api.get('/auth/me'),
};

export const clinicService = {
  getAll: async () => {
    const { data, error } = await supabase.from('clinics').select('*');
    if (error) throw error;
    return { data };
  },
  getById: async (id) => {
    const { data, error } = await supabase.from('clinics').select('*').eq('id', id).single();
    if (error) throw error;
    return { data };
  },
  create: async (clinicData) => {
    const { data, error } = await supabase.from('clinics').insert([clinicData]).select();
    if (error) throw error;
    return { data };
  },
  update: async (id, clinicData) => {
    const { data, error } = await supabase.from('clinics').update(clinicData).eq('id', id).select();
    if (error) throw error;
    return { data };
  },
  delete: async (id) => {
    const { error } = await supabase.from('clinics').delete().eq('id', id);
    if (error) throw error;
    return { success: true };
  },
};

export const chatbotService = {
  sendMessage: (message, context) => api.post('/chat/message', { message, context }),
  getHistory: () => api.get('/chat/history'),
};

export const newsService = {
  getAll: () => api.get('/news'),
  getById: (id) => api.get(`/news/${id}`),
  create: (data) => api.post('/news', data),
  update: (id, data) => api.put(`/news/${id}`, data),
  delete: (id) => api.delete(`/news/${id}`),
};

export const appointmentService = {
  getAll: () => api.get('/appointments'),
  create: (data) => api.post('/appointments', data),
  requestAppointment: (data) => api.post('/appointments/public', data),
  updateStatus: (id, status) => api.patch(`/appointments/${id}/status`, { status }),
  delete: (id) => api.delete(`/appointments/${id}`),
};

export default api;
