import { getAllBranches } from '@/types/branch';
import { MessageCircle } from 'lucide-react';
import { branchesStyles } from './styles';

export function BranchesSection() {
  const branches = getAllBranches();

  const getShortDescription = (branchName: string) => {
    const location = branchName.split('-').pop()?.trim() || '';
    return `Layanan kesehatan herbal terpadu di ${location}. Kami menyediakan berbagai pengobatan herbal dengan tenaga medis profesional.`;
  };

  const formatWhatsAppNumber = (phone: string) => {
    return phone.replace(/[^0-9]/g, '');
  };

  return (
    <section className={branchesStyles.section.container}>
      <div className={branchesStyles.container.wrapper}>
        <div className={branchesStyles.container.content}>
          {/* Header */}
          <div className={branchesStyles.header.container}>
            <h2 className={branchesStyles.header.title}>
              CABANG KAMI
            </h2>
            <p className={branchesStyles.header.description}>
              Temukan lokasi cabang Rumah Sehat Herbal Insani terdekat di kota Depok dan sekitarnya. Kami siap melayani Anda dengan sepenuh hati.
            </p>
          </div>

          {/* Branch Cards */}
          <div className={branchesStyles.grid.container}>
            {branches.map((branch) => (
              <div key={branch.id} className={branchesStyles.card.container}>
                {/* Google Maps */}
                <div className={branchesStyles.card.mapContainer}>
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className={branchesStyles.card.map}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Card Body */}
                <div className={branchesStyles.card.body}>
                  {/* Title */}
                  <h3 className={branchesStyles.card.name}>{branch.name}</h3>

                  {/* Short Description */}
                  <p className={branchesStyles.card.description}>{getShortDescription(branch.name)}</p>

                  {/* Address */}
                  <div className={branchesStyles.card.info}>
                    <p className={branchesStyles.card.label}>Alamat:</p>
                    <p className={branchesStyles.card.value}>{branch.address}</p>
                  </div>

                  {/* Contact Info Row */}
                  <div className={branchesStyles.card.contactRow}>
                    {/* Phone */}
                    <div className={branchesStyles.card.contactItem}>
                      <p className={branchesStyles.card.label}>Telepon:</p>
                      <p className={branchesStyles.card.value}>{branch.phone}</p>
                    </div>

                    {/* WhatsApp */}
                    <div className={branchesStyles.card.contactItem}>
                      <p className={branchesStyles.card.label}>WhatsApp:</p>
                      <a
                        href={`https://wa.me/${formatWhatsAppNumber(branch.whatsapp)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={branchesStyles.card.whatsapp}
                      >
                        <MessageCircle className={branchesStyles.card.whatsappIcon} />
                        <span className={branchesStyles.card.value}>{branch.whatsapp}</span>
                      </a>
                    </div>

                    {/* Email */}
                    <div className={branchesStyles.card.contactItem}>
                      <p className={branchesStyles.card.label}>Email:</p>
                      <p className={branchesStyles.card.value}>{branch.email}</p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className={branchesStyles.card.hours}>
                    <p className={branchesStyles.card.label}>Jam Operasional:</p>
                    <div className={branchesStyles.card.hoursList}>
                      <p className={branchesStyles.card.hoursItem}>
                        <span className={branchesStyles.card.hoursDay}>Senin - Jumat:</span>
                        <span className={branchesStyles.card.hoursTime}>{branch.operatingHours.weekdays}</span>
                      </p>
                      <p className={branchesStyles.card.hoursItem}>
                        <span className={branchesStyles.card.hoursDay}>Sabtu:</span>
                        <span className={branchesStyles.card.hoursTime}>{branch.operatingHours.saturday}</span>
                      </p>
                      <p className={branchesStyles.card.hoursItem}>
                        <span className={branchesStyles.card.hoursDay}>Minggu:</span>
                        <span className={branchesStyles.card.hoursTime}>{branch.operatingHours.sunday}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
