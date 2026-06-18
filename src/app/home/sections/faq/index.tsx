import { faqStyles } from './styles';

export function FaqSection() {
  const faqs = [
    {
      question: 'Apakah pengobatan herbal aman?',
      answer: 'Ya, pengobatan herbal di Herbal Insani menggunakan bahan-bahan alami yang telah teruji dan diproses dengan standar keamanan tinggi. Terapis kami juga bersertifikat dan berpengalaman.',
    },
    {
      question: 'Berapa lama proses penyembuhan?',
      answer: 'Durasi penyembuhan bervariasi tergantung jenis keluhan dan kondisi tubuh masing-masing pasien. Biasanya terlihat hasil dalam 3-5 sesi terapi.',
    },
  ];

  return (
    <section 
      className={faqStyles.section.container}
      style={{ backgroundImage: `url('/img/backfaq.webp')` }}
    >
      {/* Overlay */}
      <div className={faqStyles.section.overlay}></div>

      {/* Content */}
      <div className={faqStyles.container.wrapper}>
        <div className={faqStyles.container.content}>
          <div className={faqStyles.grid.container}>
            {/* Image */}
            <div className={faqStyles.image.container}>
              <img 
                src="/img/faqpeople.webp" 
                alt="FAQ Section" 
                className={faqStyles.image.image}
              />
            </div>

            {/* Header */}
            <div className={faqStyles.header.container}>
              <h2 className={faqStyles.header.title}>
                PERTANYAAN
              </h2>
              <h3 className={faqStyles.header.subtitle}>
                YANG SERING DIAJUKAN
              </h3>
              <p className={faqStyles.header.description}>
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan dan pengobatan di Herbal Insani
              </p>

              {/* FAQ Items */}
              <div className={faqStyles.faq.container}>
                {faqs.map((faq, index) => (
                  <div key={index} className={faqStyles.faq.item}>
                    <h4 className={faqStyles.faq.question}>
                      {faq.question}
                    </h4>
                    <p className={faqStyles.faq.answer}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
