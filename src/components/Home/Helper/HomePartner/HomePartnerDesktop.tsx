import '../../index.scss'
const HomePartnerDesktop = () => {

    const handleToPartners = () => {
        window.location.href = 'https://partners.mojnovipazar.info/';
    }
  return (
    <div className='partner-desktop-main'>
        <div className="partner-container">
        <h2>MojNP Partners</h2>
        <p>Unlock new opportunities by becoming partners with our tourism and news website. 
        Gain visibility, expand your reach, and collaborate with us to promote travel 
        experiences and deliver the latest updates to a wide audience. 
        Join us on this exciting journey and let's shape the future of tourism together.</p>
        <button onClick={handleToPartners}>Become a Partner</button>
      </div>
    </div>
  )
}

export default HomePartnerDesktop
