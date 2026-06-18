import { doctorsStyles } from './styles';

export function DoctorsSection() {
  return (
    <section className={doctorsStyles.section.container}>
      <div className={doctorsStyles.content.container}>
        <h2 className={doctorsStyles.title.text}>
          Dokter Bersertifikat dan Berpengalaman
        </h2>
        <p className={doctorsStyles.description.text}>
          Tim dokter kami terdiri dari para profesional yang bersertifikat dan berpengalaman dalam bidang pengobatan herbal. Mereka berdedikasi untuk memberikan pelayanan kesehatan terbaik dengan pendekatan holistik yang mengutamakan kesejahteraan pasien.
        </p>
        <div className={doctorsStyles.image.container}>
          <img 
            src="/img/dokterberpengalaman.webp" 
            alt="Tim Dokter Herbal Insani" 
            className={doctorsStyles.image.img}
          />
        </div>
      </div>
    </section>
  );
}
