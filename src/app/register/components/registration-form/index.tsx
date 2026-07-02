'use client';

import { useState, useMemo } from 'react';
import { ChevronRight, ChevronLeft, User, Heart, Calendar, CheckCircle, Droplet, Activity, Leaf, Hand, Stethoscope, Sparkles } from 'lucide-react';
import { registrationFormStyles } from './styles';
import { CustomCalendar } from './custom-calendar';
import Swal from 'sweetalert2';
import { getAllBranches, type BranchConfig } from '@/types/branch';

type FormData = {
  // Step 1: Personal Info
  fullName: string;
  gender: 'ikhwan' | 'akhwat' | '';
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  
  // Step 2: Health Info
  bloodType: string;
  allergies: string;
  currentMedications: string;
  complaints: string;
  
  // Step 3: Service Selection
  service: string;
  branch: string;
  terapis: string;
  
  // Step 4: Scheduling
  preferredDate: string;
  preferredTime: string;
};

type Terapis = {
  id: string;
  name: string;
  gender: 'ikhwan' | 'akhwat';
  specialties: string[];
  branch: string;
  image: string;
};

type Service = {
  id: string;
  name: string;
  icon: any;
  description: string;
};

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    address: '',
    bloodType: '',
    allergies: '',
    currentMedications: '',
    complaints: '',
    service: '',
    branch: '',
    terapis: '',
    preferredDate: '',
    preferredTime: '',
  });

  const steps = [
    { number: 1, title: 'Informasi Pribadi', icon: User },
    { number: 2, title: 'Informasi Kesehatan', icon: Heart },
    { number: 3, title: 'Pilihan Layanan', icon: Calendar },
    { number: 4, title: 'Jadwal & Konfirmasi', icon: CheckCircle },
  ];

  const terapisList: Terapis[] = [
    { id: '1', name: 'Ahmad Fauzi', gender: 'ikhwan', specialties: ['bekam', 'akupunktur', 'herbal'], branch: 'depok-merdeka', image: '/img/terapis/terapis-1.jpg' },
    { id: '2', name: 'Budi Santoso', gender: 'ikhwan', specialties: ['bekam', 'refleksi'], branch: 'depok-melati-4', image: '/img/terapis/terapis-2.jpg' },
    { id: '3', name: 'Rudi Hartono', gender: 'ikhwan', specialties: ['akupunktur', 'konsultasi'], branch: 'depok-siliwangi', image: '/img/terapis/terapis-3.jpg' },
    { id: '4', name: 'Siti Rahayu', gender: 'akhwat', specialties: ['bekam', 'herbal', 'pijat'], branch: 'depok-merdeka', image: '/img/terapis/terapis-4.jpg' },
    { id: '5', name: 'Dewi Lestari', gender: 'akhwat', specialties: ['akupunktur', 'refleksi'], branch: 'depok-melati-4', image: '/img/terapis/terapis-5.jpg' },
    { id: '6', name: 'Maya Sari', gender: 'akhwat', specialties: ['herbal', 'konsultasi', 'pijat'], branch: 'depok-sawangan', image: '/img/terapis/terapis-6.jpg' },
  ];

  const services: Service[] = [
    { id: 'bekam', name: 'Terapi Bekam', icon: Droplet, description: 'Terapi pengeluaran darah kotor untuk detoxifikasi' },
    { id: 'akupunktur', name: 'Terapi Akupunktur', icon: Activity, description: 'Terapi jarum untuk keseimbangan energi tubuh' },
    { id: 'herbal', name: 'Terapi Herbal', icon: Leaf, description: 'Pengobatan alami dengan ramuan herbal' },
    { id: 'refleksi', name: 'Terapi Refleksi', icon: Hand, description: 'Pijat titik saraf kaki untuk relaksasi' },
    { id: 'pijat', name: 'Pijat Kebugaran', icon: Sparkles, description: 'Pijat tubuh untuk kebugaran dan relaksasi' },
    { id: 'konsultasi', name: 'Konsultasi Kesehatan', icon: Stethoscope, description: 'Konsultasi dengan ahli kesehatan herbal' },
  ];

  const branches = getAllBranches();

  // Filter terapis based on service, gender, and branch
  const availableTerapis = useMemo(() => {
    return terapisList.filter(terapis => {
      const matchesGender = !formData.gender || terapis.gender === formData.gender;
      const matchesService = !formData.service || terapis.specialties.includes(formData.service);
      const matchesBranch = !formData.branch || terapis.branch === formData.branch;
      return matchesGender && matchesService && matchesBranch;
    });
  }, [formData.gender, formData.service, formData.branch]);

  // Calculate step completion percentage
  const stepCompletion = useMemo(() => {
    const step1Fields = [formData.fullName, formData.gender, formData.dateOfBirth, formData.phone, formData.email, formData.address];
    const step1Filled = step1Fields.filter(field => field.trim() !== '').length;
    const step1Progress = Math.round((step1Filled / step1Fields.length) * 100);

    const step2Fields = [formData.bloodType, formData.allergies, formData.currentMedications, formData.complaints];
    const step2Filled = step2Fields.filter(field => field.trim() !== '').length;
    const step2Progress = Math.round((step2Filled / step2Fields.length) * 100);

    const step3Fields = [formData.service, formData.branch, formData.terapis];
    const step3Filled = step3Fields.filter(field => field.trim() !== '').length;
    const step3Progress = Math.round((step3Filled / step3Fields.length) * 100);

    const step4Fields = [formData.preferredDate, formData.preferredTime];
    const step4Filled = step4Fields.filter(field => field.trim() !== '').length;
    const step4Progress = Math.round((step4Filled / step4Fields.length) * 100);

    return [step1Progress, step2Progress, step3Progress, step4Progress];
  }, [formData]);

  const handleNext = () => {
    // Validate required fields before proceeding
    if (currentStep === 1) {
      const requiredFields = [formData.fullName, formData.gender, formData.dateOfBirth, formData.phone, formData.email, formData.address];
      const missingFields = requiredFields.filter(field => field.trim() === '');
      if (missingFields.length > 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Perhatian',
          text: 'Mohon lengkapi semua field wajib sebelum melanjutkan',
          confirmButtonColor: '#10b981',
        });
        return;
      }
    }
    
    if (currentStep === 2) {
      const requiredFields = [formData.bloodType, formData.complaints];
      const missingFields = requiredFields.filter(field => field.trim() === '');
      if (missingFields.length > 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Perhatian',
          text: 'Mohon lengkapi golongan darah dan keluhan sebelum melanjutkan',
          confirmButtonColor: '#10b981',
        });
        return;
      }
    }
    
    if (currentStep === 3) {
      const requiredFields = [formData.service, formData.branch, formData.terapis];
      const missingFields = requiredFields.filter(field => field.trim() === '');
      if (missingFields.length > 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Perhatian',
          text: 'Mohon pilih layanan, cabang, dan terapis sebelum melanjutkan',
          confirmButtonColor: '#10b981',
        });
        return;
      }
      
      // Check if there are available therapists
      if (availableTerapis.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Tidak Ada Terapis',
          text: 'Tidak ada terapis yang tersedia untuk pilihan Anda. Silakan ubah pilihan layanan, cabang, atau gender.',
          confirmButtonColor: '#10b981',
        });
        return;
      }
    }

    if (currentStep === 4) {
      const requiredFields = [formData.preferredDate, formData.preferredTime];
      const missingFields = requiredFields.filter(field => field.trim() === '');
      if (missingFields.length > 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Perhatian',
          text: 'Mohon pilih tanggal dan jam sebelum mengkonfirmasi pendaftaran',
          confirmButtonColor: '#10b981',
        });
        return;
      }
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className={registrationFormStyles.section.container}>
      <div className={registrationFormStyles.container.wrapper}>
        {/* Progress Steps */}
        <div className={registrationFormStyles.progress.container}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;
            const completion = stepCompletion[index];
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.number} className={registrationFormStyles.progress.step}>
                {!isLast && (
                  <div className={`${registrationFormStyles.progress.line} ${isCompleted ? registrationFormStyles.progress.lineActive : ''}`}></div>
                )}
                <div className={registrationFormStyles.progress.circleWrapper}>
                  <div className={`${registrationFormStyles.progress.circle} ${isActive ? registrationFormStyles.progress.circleActive : ''} ${isCompleted ? registrationFormStyles.progress.circleCompleted : ''}`}>
                    {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  {isActive && (
                    <div className={registrationFormStyles.progress.percentage}>
                      {completion}%
                    </div>
                  )}
                </div>
                <span className={`${registrationFormStyles.progress.label} ${isActive ? registrationFormStyles.progress.labelActive : ''}`}>
                  {step.title}
                </span>
                {isActive && (
                  <div className={registrationFormStyles.progress.progressBar}>
                    <div 
                      className={registrationFormStyles.progress.progressFill}
                      style={{ width: `${completion}%` }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Form Content */}
        <div className={registrationFormStyles.form.container}>
          {currentStep === 1 && (
            <div className={registrationFormStyles.step.container}>
              <h2 className={registrationFormStyles.step.title}>Informasi Pribadi</h2>
              
              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Nama Lengkap</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.input}
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Gender</label>
                <div className={registrationFormStyles.gender.container}>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: 'ikhwan' }))}
                    className={`${registrationFormStyles.gender.card} ${formData.gender === 'ikhwan' ? registrationFormStyles.gender.cardActive : ''}`}
                  >
                    <User className={registrationFormStyles.gender.icon} />
                    <span>Ikhwan</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: 'akhwat' }))}
                    className={`${registrationFormStyles.gender.card} ${formData.gender === 'akhwat' ? registrationFormStyles.gender.cardActive : ''}`}
                  >
                    <User className={registrationFormStyles.gender.icon} />
                    <span>Akhwat</span>
                  </button>
                </div>
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Tanggal Lahir</label>
                <CustomCalendar
                  value={formData.dateOfBirth}
                  onChange={(date) => setFormData(prev => ({ ...prev, dateOfBirth: date }))}
                  disablePastDates={false}
                  minYear={1950}
                  maxYear={new Date().getFullYear()}
                />
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>No. Telepon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.input}
                  placeholder="Masukkan nomor telepon"
                />
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.input}
                  placeholder="Masukkan email"
                />
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Alamat</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.textarea}
                  placeholder="Masukkan alamat lengkap"
                  rows={3}
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className={registrationFormStyles.step.container}>
              <h2 className={registrationFormStyles.step.title}>Informasi Kesehatan</h2>
              
              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Golongan Darah</label>
                <select
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.select}
                >
                  <option value="">Pilih golongan darah</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Riwayat Alergi (jika ada)</label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.textarea}
                  placeholder="Jelaskan riwayat alergi jika ada"
                  rows={3}
                />
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Obat yang Sedang Dikonsumsi</label>
                <textarea
                  name="currentMedications"
                  value={formData.currentMedications}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.textarea}
                  placeholder="Sebutkan obat yang sedang dikonsumsi"
                  rows={3}
                />
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Keluhan / Alasan Berkunjung</label>
                <textarea
                  name="complaints"
                  value={formData.complaints}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.textarea}
                  placeholder="Jelaskan keluhan atau alasan Anda berkunjung"
                  rows={4}
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className={registrationFormStyles.step.container}>
              <h2 className={registrationFormStyles.step.title}>Pilihan Layanan</h2>
              
              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Jenis Layanan</label>
                <div className={registrationFormStyles.service.container}>
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, service: service.id }))}
                        className={`${registrationFormStyles.service.card} ${formData.service === service.id ? registrationFormStyles.service.cardActive : ''}`}
                      >
                        <Icon className={registrationFormStyles.service.icon} />
                        <span className={registrationFormStyles.service.name}>{service.name}</span>
                        <span className={registrationFormStyles.service.description}>{service.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Cabang</label>
                <div className={registrationFormStyles.branch.container}>
                  {branches.map((branch) => (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, branch: branch.id }))}
                      className={`${registrationFormStyles.branch.card} ${formData.branch === branch.id ? registrationFormStyles.branch.cardActive : ''}`}
                    >
                      <span className={registrationFormStyles.branch.name}>{branch.name}</span>
                      <span className={registrationFormStyles.branch.address}>{branch.address}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Pilih Terapis</label>
                <p className={registrationFormStyles.form.hint}>
                  {availableTerapis.length > 0 
                    ? `${availableTerapis.length} terapis tersedia sesuai pilihan Anda` 
                    : 'Pilih gender, layanan, dan cabang untuk melihat terapis yang tersedia'}
                </p>
                <div className={registrationFormStyles.doctor.container}>
                  {availableTerapis.map((terapis) => {
                    const branch = branches.find(b => b.id === terapis.branch);
                    return (
                      <button
                        key={terapis.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, terapis: terapis.id }))}
                        className={`${registrationFormStyles.doctor.card} ${formData.terapis === terapis.id ? registrationFormStyles.doctor.cardActive : ''}`}
                        style={{ backgroundImage: `url('${terapis.image}')` }}
                      >
                        <div className={registrationFormStyles.doctor.backgroundImage}></div>
                        <div className={registrationFormStyles.doctor.overlay}></div>
                        <div className={registrationFormStyles.doctor.content}>
                          <span className={registrationFormStyles.doctor.name}>{terapis.name}</span>
                          <span className={registrationFormStyles.doctor.specialty}>{terapis.specialties.join(', ')}</span>
                          <span className={registrationFormStyles.doctor.gender}>
                            {terapis.gender === 'ikhwan' ? 'Ikhwan' : 'Akhwat'} - {branch?.name || terapis.branch}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className={registrationFormStyles.step.container}>
              <h2 className={registrationFormStyles.step.title}>Jadwal & Konfirmasi</h2>
              
              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Tanggal yang Diinginkan</label>
                <CustomCalendar
                  value={formData.preferredDate}
                  onChange={(date) => setFormData(prev => ({ ...prev, preferredDate: date }))}
                />
              </div>

              <div className={registrationFormStyles.form.group}>
                <label className={registrationFormStyles.form.label}>Jam yang Tersedia</label>
                <p className={registrationFormStyles.form.hint}>
                  {formData.gender === 'ikhwan' ? 'Jadwal Ikhwan: 08:00 - 12:00' : formData.gender === 'akhwat' ? 'Jadwal Akhwat: 13:00 - 17:00' : 'Pilih gender terlebih dahulu'}
                </p>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className={registrationFormStyles.form.select}
                  disabled={!formData.gender}
                >
                  <option value="">Pilih jam</option>
                  {formData.gender === 'ikhwan' && (
                    <>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                    </>
                  )}
                  {formData.gender === 'akhwat' && (
                    <>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </>
                  )}
                </select>
              </div>

              {/* Summary */}
              <div className={registrationFormStyles.summary.container}>
                <h3 className={registrationFormStyles.summary.title}>Ringkasan Pendaftaran</h3>
                <div className={registrationFormStyles.summary.content}>
                  <div className={registrationFormStyles.summary.item}>
                    <span className={registrationFormStyles.summary.label}>Nama:</span>
                    <span className={registrationFormStyles.summary.value}>{formData.fullName || '-'}</span>
                  </div>
                  <div className={registrationFormStyles.summary.item}>
                    <span className={registrationFormStyles.summary.label}>Gender:</span>
                    <span className={registrationFormStyles.summary.value}>{formData.gender || '-'}</span>
                  </div>
                  <div className={registrationFormStyles.summary.item}>
                    <span className={registrationFormStyles.summary.label}>Layanan:</span>
                    <span className={registrationFormStyles.summary.value}>{formData.service || '-'}</span>
                  </div>
                  <div className={registrationFormStyles.summary.item}>
                    <span className={registrationFormStyles.summary.label}>Cabang:</span>
                    <span className={registrationFormStyles.summary.value}>{formData.branch || '-'}</span>
                  </div>
                  <div className={registrationFormStyles.summary.item}>
                    <span className={registrationFormStyles.summary.label}>Tanggal:</span>
                    <span className={registrationFormStyles.summary.value}>{formData.preferredDate || '-'}</span>
                  </div>
                  <div className={registrationFormStyles.summary.item}>
                    <span className={registrationFormStyles.summary.label}>Jam:</span>
                    <span className={registrationFormStyles.summary.value}>{formData.preferredTime || '-'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className={registrationFormStyles.navigation.container}>
            {currentStep > 1 && (
              <button
                onClick={handlePrevious}
                className={registrationFormStyles.navigation.buttonSecondary}
              >
                <ChevronLeft className="w-5 h-5" />
                Sebelumnya
              </button>
            )}
            
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className={registrationFormStyles.navigation.buttonPrimary}
              >
                Selanjutnya
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Pendaftaran Berhasil!',
                    text: 'Terima kasih telah mendaftar. Kami akan menghubungi Anda segera.',
                    confirmButtonColor: '#10b981',
                  });
                }}
                className={registrationFormStyles.navigation.buttonPrimary}
              >
                Konfirmasi Pendaftaran
                <CheckCircle className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
