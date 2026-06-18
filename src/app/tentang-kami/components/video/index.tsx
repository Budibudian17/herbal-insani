'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { videoStyles } from './styles';

export function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={videoStyles.section.container}>
      {/* Content */}
      <div className={videoStyles.container.wrapper}>
        <div className={videoStyles.container.content}>
          <div className={videoStyles.grid.container}>
            {/* Video Thumbnail */}
            <div className={videoStyles.video.container}>
              <div 
                className={videoStyles.video.thumbnail}
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  src="/img/video-thumbnail.webp" 
                  alt="Video Thumbnail" 
                  className={videoStyles.video.thumbnailImage}
                />
                <div className={videoStyles.video.playButton}>
                  <Play className={videoStyles.video.playIcon} fill="white" />
                </div>
              </div>
            </div>

            {/* Header */}
            <div className={videoStyles.header.container}>
              <h2 className={videoStyles.header.title}>
                SEJARAH
              </h2>
              <h3 className={videoStyles.header.subtitle}>
                HERBAL INSANI
              </h3>
              <div className={videoStyles.header.points.container}>
                <div className={videoStyles.header.points.item}>
                  <span className={videoStyles.header.points.bullet}>•</span>
                  <span className={videoStyles.header.points.text}>Didirikan sejak tahun 2010 dengan visi untuk menyediakan layanan kesehatan herbal berkualitas tinggi bagi masyarakat Indonesia</span>
                </div>
                <div className={videoStyles.header.points.item}>
                  <span className={videoStyles.header.points.bullet}>•</span>
                  <span className={videoStyles.header.points.text}>Berkembang pesat dengan membuka berbagai cabang di kota-kota besar di seluruh Indonesia</span>
                </div>
                <div className={videoStyles.header.points.item}>
                  <span className={videoStyles.header.points.bullet}>•</span>
                  <span className={videoStyles.header.points.text}>Telah melayani ribuan pasien dengan berbagai layanan kesehatan herbal yang terbukti efektif</span>
                </div>
                <div className={videoStyles.header.points.item}>
                  <span className={videoStyles.header.points.bullet}>•</span>
                  <span className={videoStyles.header.points.text}>Terus berinovasi dalam mengembangkan metode pengobatan herbal modern yang terintegrasi dengan kearifan lokal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className={videoStyles.modal.overlay} onClick={() => setIsModalOpen(false)}>
          <div className={videoStyles.modal.container} onClick={(e) => e.stopPropagation()}>
            <button 
              className={videoStyles.modal.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              <X className={videoStyles.modal.closeIcon} />
            </button>
            <video 
              src="/video/intro-video.mp4" 
              controls
              autoPlay
              className={videoStyles.modal.video}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
