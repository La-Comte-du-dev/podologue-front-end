import axios from 'axios'
import {
  Patient,
  FormPatient,
  CareType,
  FormCareType,
  Care,
  FormCare,
  Appointment,
  FormAppointment,
} from '../interfaces'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

//-------------------Patients-----------------------
// Returns the whole patient list
export const fetchPatients = async (): Promise<Patient[]> => {
  return (await axios(`${API_URL}/patients`)).data
}

// Returns a patient by his Id
export const fetchPatientById = async (patientId: Number): Promise<Patient> => {
  return (await axios(`${API_URL}/patients/${patientId}`)).data
}

// Create a new patient
export const createPatient = async (formPatient: FormPatient) => {
  await axios.post(`${API_URL}/patients`, formPatient)
}

// Update a patient
export const updatePatient = async (
  patientId: number,
  formPatient: FormPatient,
) => {
  return (await axios.put(`${API_URL}/patients/${patientId}`, formPatient)).data
}

// delete a patient
export const deletePatient = async (patientId: number): Promise<any> => {
  return await axios.delete(`${API_URL}/patients/${patientId}`)
}

//-------------------CareType-----------------------
// Returns the whole care types list
export const fetchCareTypes = async (): Promise<CareType[]> => {
  return (await axios(`${API_URL}/caretypes`)).data
}

// Returns a care type by his Id
export const fetchCareTypeId = async (
  caretypeId: Number,
): Promise<CareType> => {
  return (await axios(`${API_URL}/caretypes/${caretypeId}`)).data
}

// Create a new care type
export const createCareType = async (formCareType: FormCareType) => {
  await axios.post(`${API_URL}/caretypes`, formCareType)
}

// Update a care type
export const updateCareType = async (
  caretypeId: number,
  formCareType: FormCareType,
) => {
  return (await axios.put(`${API_URL}/caretypes/${caretypeId}`, formCareType))
    .data
}

// delete a care type
export const deleteCareType = async (caretypeId: number): Promise<any> => {
  return await axios.delete(`${API_URL}/caretypes/${caretypeId}`)
}

//-------------------Cares-----------------------
// Returns the whole cares list
export const fetchCares = async (): Promise<Care[]> => {
  return (await axios(`${API_URL}/cares`)).data
}

// Returns a care by his Id
export const fetchCareId = async (careId: Number): Promise<Care> => {
  return (await axios(`${API_URL}/cares/${careId}`)).data
}

// Create a new care
export const createCare = async (formCare: FormCare) => {
  await axios.post(`${API_URL}/cares`, formCare)
}

// Update a care
export const updateCare = async (careId: number, formCare: FormCare) => {
  return (await axios.put(`${API_URL}/cares/${careId}`, formCare)).data
}

// delete a care
export const deleteCare = async (careId: number): Promise<any> => {
  return await axios.delete(`${API_URL}/cares/${careId}`)
}

//-------------------Appointments-----------------------
// Returns the whole appointments list
export const fetchAppointments = async (): Promise<Appointment[]> => {
  return (await axios(`${API_URL}/appointments`)).data
}

// Returns an appointment by his Id
export const fetchAppointmentId = async (
  appointmentId: Number,
): Promise<Appointment> => {
  return (await axios(`${API_URL}/appointments/${appointmentId}`)).data
}

// Create a new appointment
export const createAppointment = async (formAppointment: FormAppointment) => {
  await axios.post(`${API_URL}/appointments`, formAppointment)
}

// Update an appointment
export const updateAppointment = async (
  appointmentId: number,
  formAppointment: FormAppointment,
) => {
  return (
    await axios.put(`${API_URL}/appointments/${appointmentId}`, formAppointment)
  ).data
}

// delete an appointment
export const deleteAppointment = async (
  appointmentId: number,
): Promise<any> => {
  return await axios.delete(`${API_URL}/appointments/${appointmentId}`)
}
