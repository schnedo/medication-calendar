import Doctor from "./doctor";
import TreatmentCenter from "./treatmentCenter";
import User from "./user";
import * as localforage from "localforage";

const doctorKey = "doctor";
const treatmentCenterKey = "treatmentCenter";
const userKey = "user";

export async function getDoctor(): Promise<Doctor | null> {
  return localforage.getItem(doctorKey);
}

export async function saveDoctor(doctor: Doctor): Promise<Doctor> {
  return localforage.setItem(doctorKey, doctor);
}

export async function getTreatmentCenter(): Promise<TreatmentCenter | null> {
  return localforage.getItem(treatmentCenterKey);
}

export async function saveTreatmentCenter(
  treatmentCenter: TreatmentCenter,
): Promise<TreatmentCenter> {
  return localforage.setItem(treatmentCenterKey, treatmentCenter);
}

export async function getUser(): Promise<User | null> {
  return localforage.getItem(userKey);
}

export async function saveUser(user: User): Promise<User> {
  return localforage.setItem(userKey, user);
}
