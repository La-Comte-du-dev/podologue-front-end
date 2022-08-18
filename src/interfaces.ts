export interface Patient {
  id: number
  firstname: string
  lastname: string
  adress1: string
  adress2: string | null
  zipcode: string
  city: string
  email: string | null
  phone?: string | null
}
export interface FormPatient {
  firstname: string
  lastname: string
  adress1: string
  adress2: string | null
  zipcode: string
  city: string
  email: string | null
  phone?: string | null
}

export interface CareType {
  id: number
  name: string
  caretypeprice: number | null
  cares: Care[]
}

export interface FormCareType {
  name: string
  caretypeprice: number | null
  cares: Care[]
}

export interface Care {
  id: number
  name: string
  careprice: number | null
  caretypeId: number
}

export interface FormCare {
  name: string
  careprice: number | null
  caretypeId: number
}

export interface Appointment {
  id: number
  date: Date
  facture: string
  isquotation: boolean
  patientId: number
  cares: Care[] | null
}

export interface FormAppointment {
  date: Date
  facture: string
  isquotation: boolean
  patientId: number
  cares: Care[] | null
}
