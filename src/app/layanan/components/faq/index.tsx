'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqStyles } from './styles';

const faqs = [
  {
    question: 'Apakah layanan herbal aman untuk semua usia?',
    answer: 'Layanan herbal kami aman untuk berbagai usia, namun untuk anak-anak dan lansia kami sarankan konsultasi terlebih dahulu dengan tim ahli kami untuk menentukan treatment yang tepat.',
  },
  {
    question: 'Berapa lama satu sesi terapi biasanya berlangsung?',
    answer: 'Durasi terapi bervariasi tergantung jenis layanan. Bekam biasanya 30-60 menit, akupunktur 45-90 menit, pijat tradisional 60-90 menit, dan konsultasi herbal 30-45 menit.',
  },
  {
    question: 'Apakah perlu booking sebelum datang?',
    answer: 'Kami sangat menyarankan booking terlebih dahulu untuk menghindari antrean dan memastikan ketersediaan terapis. Anda bisa booking via WhatsApp atau telepon.',
  },
  {
    question: 'Apakah ada garansi untuk hasil terapi?',
    answer: 'Kami tidak menjamin hasil spesifik karena setiap kondisi tubuh berbeda. Namun kami berkomitmen memberikan treatment terbaik berdasarkan pengalaman dan keahlian tim kami.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={faqStyles.section.container}>
      <div className={faqStyles.container.wrapper}>
        <div className={faqStyles.header.container}>
          <h2 className={faqStyles.header.title}>Pertanyaan Umum</h2>
          <p className={faqStyles.header.description}>
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>

        <div className={faqStyles.list.container}>
          {faqs.map((faq, index) => (
            <div key={index} className={faqStyles.item.container}>
              <button
                onClick={() => toggleFAQ(index)}
                className={faqStyles.item.button}
              >
                <span className={faqStyles.item.question}>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className={faqStyles.item.icon} />
                ) : (
                  <ChevronDown className={faqStyles.item.icon} />
                )}
              </button>
              {openIndex === index && (
                <div className={faqStyles.item.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
