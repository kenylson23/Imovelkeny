import { leads, consultations, type Lead, type InsertLead, type Consultation, type InsertConsultation } from "@shared/schema";

export interface IStorage {
  // Lead management
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: number): Promise<Lead | undefined>;
  
  // Consultation management
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  getConsultationById(id: number): Promise<Consultation | undefined>;
}

export class MemStorage implements IStorage {
  private leads: Map<number, Lead>;
  private consultations: Map<number, Consultation>;
  private leadIdCounter: number;
  private consultationIdCounter: number;

  constructor() {
    this.leads = new Map();
    this.consultations = new Map();
    this.leadIdCounter = 1;
    this.consultationIdCounter = 1;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.leadIdCounter++;
    const lead: Lead = {
      ...insertLead,
      id,
      createdAt: new Date(),
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getLeadById(id: number): Promise<Lead | undefined> {
    return this.leads.get(id);
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = this.consultationIdCounter++;
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      createdAt: new Date(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getConsultationById(id: number): Promise<Consultation | undefined> {
    return this.consultations.get(id);
  }
}

export const storage = new MemStorage();
