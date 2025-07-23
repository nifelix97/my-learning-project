import NavBar from "./components/NavBar"
import Container from "./components/Container"
import Products from "./components/cards/Products"
import Aboutus from "./components/aboutus"
import Benefits from "./components/Benefits"
import Mission from "./components/Mission"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import QuickLinks from "./components/QuickLinks"

function App() {
  const productData = [
    {
      id: 1,
      name: "Renting Offices",
      image: "https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg",
      description: "Office tools are software applications designed to enhance productivity and streamline tasks in a professional setting. They typically include word processors, spreadsheets, presentation software, email clients, and database management systems"
    },
    {
      id: 2,
      name: "Coffee Shop",
      image: "https://images.pexels.com/photos/32640500/pexels-photo-32640500.jpeg",
      description: "A coffee shop is a place where people can relax, socialize, work, or simply enjoy a cup of coffee and other refreshments. They offer a variety of coffee drinks, pastries, and sometimes light meals. "
    },
    {
      id: 3,
      name: "Private event Space",
      image: "https://images.pexels.com/photos/13308319/pexels-photo-13308319.jpeg",
      description: "A private event space is a dedicated area designed for hosting events such as parties, meetings, and conferences. These spaces often come with amenities like catering services, audio-visual equipment, and customizable layouts to suit various event needs."
    }
  ]

  return (
    <>
    <div>
      <NavBar />
      <Container />
      <div className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-6 xs:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
        {productData.map(product => (
          <Products 
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
      <Aboutus />
      <Benefits />
      <Mission />
      <ContactUs />
      <QuickLinks />
      <Footer />
    </div>
    </>
  )
}

export default App