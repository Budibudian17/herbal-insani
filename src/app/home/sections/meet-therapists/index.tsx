import { meetTherapistsStyles } from './styles';

export function MeetTherapistsSection() {
  const therapists = [
    {
      name: 'Dr. Ahmad Hidayat',
      position: 'Ahli Terapi Herbal',
      description: 'Berpengalaman lebih dari 10 tahun dalam pengobatan herbal tradisional dengan pendekatan holistik.',
      photo: '/img/dokumentasi2.webp',
    },
    {
      name: 'Siti Aminah, S.Tr.T',
      position: 'Spesialis Bekam',
      description: 'Bersertifikat dalam terapi bekam dengan teknik modern dan higienis untuk hasil optimal.',
      photo: '/img/dokumentasi3.webp',
    },
    {
      name: 'Budi Santoso, Ak.N',
      position: 'Ahli Akupunktur',
      description: 'Lulusan akademi akupunktur terkemuka dengan keahlian dalam pengobatan tradisional Tiongkok.',
      photo: '/img/dokumentasi4.webp',
    },
    {
      name: 'Dewi Kartika, M.Tr.T',
      position: 'Terapis Refleksi',
      description: 'Ahli dalam terapi refleksi untuk memperbaiki sirkulasi dan fungsi organ tubuh.',
      photo: '/img/dokumentasi5.webp',
    },
  ];

  return (
    <section className={meetTherapistsStyles.section.container}>
      <div className={meetTherapistsStyles.container.wrapper}>
        <div className={meetTherapistsStyles.container.content}>
          {/* Header */}
          <div className={meetTherapistsStyles.header.container}>
            <h2 className={meetTherapistsStyles.header.title}>
              BERTEMU DENGAN TERAPIS KAMI
            </h2>
            <p className={meetTherapistsStyles.header.subtitle}>
              Tim profesional yang siap membantu Anda kembali sehat
            </p>
          </div>

          {/* Therapists Grid */}
          <div className={meetTherapistsStyles.grid.container}>
            {therapists.map((therapist, index) => (
              <div key={index}>
                {/* Image with Hover Overlay */}
                <div className={meetTherapistsStyles.item.container}>
                  <img
                    src={therapist.photo}
                    alt={therapist.name}
                    className={meetTherapistsStyles.item.image}
                  />
                  <div className={meetTherapistsStyles.item.overlay}>
                    <button className={meetTherapistsStyles.item.button}>
                      Lihat info detail
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className={meetTherapistsStyles.content.container}>
                  <h3 className={meetTherapistsStyles.content.name}>
                    {therapist.name}
                  </h3>
                  <p className={meetTherapistsStyles.content.position}>
                    {therapist.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className={meetTherapistsStyles.viewAll.container}>
            <button className={meetTherapistsStyles.viewAll.button}>
              Lihat semua Terapis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
