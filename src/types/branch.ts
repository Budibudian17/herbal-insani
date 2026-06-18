export type BranchId = 'depok-merdeka' | 'depok-melati-4' | 'depok-siliwangi' | 'depok-sawangan';

export interface BranchConfig {
  id: BranchId;
  name: string;
  code: string;
  domain?: string;
  subdomain: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  features: {
    onlineRegistration: boolean;
    whatsappNotification: boolean;
    smartTV: boolean;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export const BRANCHES: Record<BranchId, BranchConfig> = {
  'depok-merdeka': {
    id: 'depok-merdeka',
    name: 'Rumah Sehat Herbal Insani - Merdeka',
    code: 'DPK-MRD',
    subdomain: 'depok-merdeka',
    address: 'Jl Merdeka Raya Blok IV No 13 Depok II Tengah Sukmajaya-Depok',
    phone: '021-7700812',
    whatsapp: '0895-3351-86161',
    email: 'merdeka@herbalinsani.com',
    operatingHours: {
      weekdays: '08:00 - 20:00',
      saturday: '08:00 - 17:00',
      sunday: '09:00 - 14:00',
    },
    features: {
      onlineRegistration: true,
      whatsappNotification: true,
      smartTV: true,
    },
    theme: {
      primaryColor: '#10b981',
      secondaryColor: '#059669',
    },
  },
  'depok-melati-4': {
    id: 'depok-melati-4',
    name: 'Rumah Sehat Herbal Insani - Melati Raya no 4',
    code: 'DPK-ML4',
    subdomain: 'depok-melati-4',
    address: 'Jl Melati Raya no 4 RT005/RW05 Perumnas Depok 1 Kel. Depok Jaya Kec. Pancoran Mas Kota Depok',
    phone: '021-77268825',
    whatsapp: '0838 7111 4646',
    email: 'melati4@herbalinsani.com',
    operatingHours: {
      weekdays: '08:00 - 20:00',
      saturday: '08:00 - 17:00',
      sunday: 'Tutup',
    },
    features: {
      onlineRegistration: true,
      whatsappNotification: true,
      smartTV: false,
    },
    theme: {
      primaryColor: '#3b82f6',
      secondaryColor: '#2563eb',
    },
  },
  'depok-siliwangi': {
    id: 'depok-siliwangi',
    name: 'Rumah Sehat Herbal Insani - Siliwangi',
    code: 'DPK-SLW',
    subdomain: 'depok-siliwangi',
    address: 'Jl. Siliwangi No. 7F Kel. Depok Kec. Pancoranmas Kota Depok',
    phone: '021-77211625',
    whatsapp: '0852-1047-9838',
    email: 'siliwangi@herbalinsani.com',
    operatingHours: {
      weekdays: '07:00 - 21:00',
      saturday: '07:00 - 18:00',
      sunday: '08:00 - 15:00',
    },
    features: {
      onlineRegistration: true,
      whatsappNotification: true,
      smartTV: true,
    },
    theme: {
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
    },
  },
  'depok-sawangan': {
    id: 'depok-sawangan',
    name: 'Rumah Sehat Herbal Insani - Sawangan',
    code: 'DPK-SWG',
    subdomain: 'depok-sawangan',
    address: 'Jl. Raya Muchtar No.8, RT.01/RW.11 Sawangan Lama, Kec. Sawangan Kota Depok Jawa Barat 16511',
    phone: '0251-2028-209',
    whatsapp: '0823-1565-7800',
    email: 'sawangan@herbalinsani.com',
    operatingHours: {
      weekdays: '08:00 - 20:00',
      saturday: '08:00 - 17:00',
      sunday: '09:00 - 14:00',
    },
    features: {
      onlineRegistration: true,
      whatsappNotification: true,
      smartTV: true,
    },
    theme: {
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
    },
  },
};

export function getBranchById(id: BranchId): BranchConfig | undefined {
  return BRANCHES[id];
}

export function getBranchBySubdomain(subdomain: string): BranchConfig | undefined {
  return Object.values(BRANCHES).find(
    (branch) => branch.subdomain === subdomain
  );
}

export function getBranchByCode(code: string): BranchConfig | undefined {
  return Object.values(BRANCHES).find(
    (branch) => branch.code === code
  );
}

export function getAllBranches(): BranchConfig[] {
  return Object.values(BRANCHES);
}
