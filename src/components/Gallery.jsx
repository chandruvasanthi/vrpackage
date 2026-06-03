import './Gallery.css'

const galleryImages = [

  'https://i.ibb.co/ds5vnrjr/premium-photo-1765592886838-40e716f69502.avif',

  'https://i.ibb.co/d4hNQv5n/photo-1612188852636-8f59921b41a6.avif',

  'https://i.ibb.co/V0n6zsVd/premium-photo-1765816720952-d558d7dcb18b.avif',

  'https://i.ibb.co/mVJWh2P0/ou-Ki-Nn-P4-Xs-Erkt1-Vx-FAu-Od-Gf-MRrj-QMItp-NUPxpano-Ip-Lk-PHt05qb42-Fv3-Ar-XMkf-R-c-S58u-EGz-Wn-Pf-St.jpg',

  'https://i.ibb.co/kpJh079/0f-R3-ENti0-NYBe-Oyx-UPYV2uuv-Akmz-STu-X1tjtsx-6-ENd-MXYi9we-f-RJpv-Co-As-LS5-C8-PUOk-Dh-Mz-O155b-QUq-Ro.jpg',

  'https://i.ibb.co/pjPDdjmc/corrugated-boxes.jpg',


]

function Gallery() {
  return (
    <section className='gallery' id='gallery'>

      <h2 className='section-title' id='fc'>
        Factory Gallery
      </h2>

      <div className='gallery-grid'>

        {galleryImages.map((image, index) => (

          <div className='gallery-card' key={index}>

            <img
              src={image}
              alt='Industrial Packaging Solutions'  loading='lazy'
            />

          </div>

        ))}

      </div>
       
       
    </section>
  )
}

export default Gallery;