// Local storage implementation for static deployment
export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  createdAt: Date;
}

export interface Consultation {
  id: number;
  name: string;
  email: string;
  phone: string;
  objective: string;
  message: string | null;
  createdAt: Date;
}

export type InsertLead = Omit<Lead, 'id' | 'createdAt'>;
export type InsertConsultation = Omit<Consultation, 'id' | 'createdAt'>;

class LocalStorage {
  private getNextId(key: string): number {
    const stored = localStorage.getItem(`${key}_counter`);
    const nextId = stored ? parseInt(stored) + 1 : 1;
    localStorage.setItem(`${key}_counter`, nextId.toString());
    return nextId;
  }

  createLead(insertLead: InsertLead): Promise<Lead> {
    return new Promise((resolve) => {
      const id = this.getNextId('leads');
      const lead: Lead = {
        ...insertLead,
        id,
        createdAt: new Date(),
      };
      
      const existingLeads = this.getLeads();
      const updatedLeads = [...existingLeads, lead];
      localStorage.setItem('leads', JSON.stringify(updatedLeads));
      
      resolve(lead);
    });
  }

  getLeads(): Lead[] {
    const stored = localStorage.getItem('leads');
    if (!stored) return [];
    
    return JSON.parse(stored).map((lead: any) => ({
      ...lead,
      createdAt: new Date(lead.createdAt)
    }));
  }

  createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    return new Promise((resolve) => {
      const id = this.getNextId('consultations');
      const consultation: Consultation = {
        ...insertConsultation,
        id,
        createdAt: new Date(),
      };
      
      const existingConsultations = this.getConsultations();
      const updatedConsultations = [...existingConsultations, consultation];
      localStorage.setItem('consultations', JSON.stringify(updatedConsultations));
      
      resolve(consultation);
    });
  }

  getConsultations(): Consultation[] {
    const stored = localStorage.getItem('consultations');
    if (!stored) return [];
    
    return JSON.parse(stored).map((consultation: any) => ({
      ...consultation,
      createdAt: new Date(consultation.createdAt)
    }));
  }
}

export const storage = new LocalStorage();