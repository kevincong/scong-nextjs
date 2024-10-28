import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Company() {
    const scrollToDesign = () => {
        const designSection = document.querySelector('#design-section');
        if (designSection) {
            designSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToPhotography = () => {
        const photographySection = document.querySelector('#photography-section');
        if (photographySection) {
            photographySection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Head>
                <title>Scong - Photography & Design Services</title>
                <meta name="description" content="Professional photography and design services" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            </Head>

            {/* Header */}
            <header className="p-3 border-bottom fixed-top bg-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <Image src="/logo.png" width={40} height={40} alt="Scong Logo" />
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 link-dark">Home</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark" onClick={scrollToDesign}>Services</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark" onClick={scrollToPhotography}>Portfolio</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark" onClick={scrollToContact}>Contact</a></li>
                        </ul>

                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content text-center">
                    <h1 className="display-5 fw-bold mb-4">Welcome!</h1>
                    <p className="lead mb-4">
                        At SCONG, we offer a unique blend of professional photography and design services tailored to both personal and commercial needs. With a creative eye and attention to detail, we specialize in capturing life's most meaningful moments and transforming ideas into visually compelling designs.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button 
                            type="button" 
                            className="btn btn-light btn-lg px-4"
                            onClick={scrollToDesign}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Design Services Section */}
            <section id="design-section" className="service-section design-section">
                <div className="background-image">
                    <Image
                        src="/DO01010492.JPG"
                        alt="Design Services"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                    <div className="overlay"></div>
                </div>
                <div className="content-wrapper design-content">
                    <div className="content">
                        <h2>Home Design</h2>
                        <p>
                            Our home design services provide custom graphic solutions, from branding and logo design to marketing materials like flyers, brochures, and digital media content. Whether you're looking to elevate your brand's identity or create stunning visual content, our design team works closely with you to bring your vision to life.
                        </p>
                        <button className="btn btn-light btn-lg" onClick={scrollToContact}>Contact Us</button>
                    </div>
                </div>
            </section>

            {/* Photography Services Section */}
            <section id="photography-section" className="service-section photography-section">
                <div className="background-image">
                    <Image
                        src="/DSC01107.JPG"
                        alt="Photography Services"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                    <div className="overlay"></div>
                </div>
                <div className="content-wrapper photography-content">
                    <div className="content">
                        <div className="container">
                            <h2>Photography & Cinematography</h2>
                            <p>
                                Our photography & cinematography services cover a wide range of areas including event photography (weddings, corporate events, and parties), professional portraits, and product photography for businesses. We ensure that every shot tells a story and leaves a lasting impression.
                            </p>
                            <a href="https://www.instagram.com/kevincong/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-light btn-lg">
                                <i className="bi bi-instagram me-2"></i>
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact-section" className="contact-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Contact Us</h2>
                            <p className="lead mb-4">
                                Ready to bring your vision to life? We'd love to hear from you.
                            </p>
                            <div className="contact-options">
                                <a href="mailto:congkevin@gmail.com" className="btn btn-primary btn-lg contact-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                    Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          background-image: url('/DSC00801.JPG'); /* Set the background image */
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white; /* Change text color for better contrast */
        }

        .hero-content {
          text-align: center;
          padding: 5rem;
        }

        .service-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .background-image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.6);
          z-index: 1;
        }

        .content-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          padding: 2rem;
        }

        .content {
          background: rgba(255, 255, 255, 0.9);
          padding: 3rem;
          border-radius: 20px;
          max-width: 800px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .content h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .content p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: #444;
        }

        /* New styles for photography section */
        .photography-content {
          justify-content: flex-end;
          padding-right: 10%;
        }

        .photography-content .content {
          margin-left: auto;
          max-width: 600px;
          text-align: left;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 3rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .photography-content {
            justify-content: center;
            padding-right: 2rem;
            padding-left: 2rem;
          }

          .photography-content .content {
            margin: 0;
            text-align: center;
            padding: 2rem;
          }

          .content {
            padding: 2rem;
            margin: 1rem;
          }

          .content h2 {
            font-size: 2rem;
          }

          .content p {
            font-size: 1rem;
          }
        }

        /* Design section specific styles */
        .design-content {
          align-items: flex-end;
          padding: 0;
        }

        .design-content .content {
          width: 100%;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.5);
          padding: 4rem 0;
          border-radius: 0;
          text-align: left;
        }

        .design-content .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .content-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          padding: 2rem;
        }

        .content h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .content p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .design-content .content {
            padding: 3rem 0;
          }

          .design-content .container {
            padding: 0 1.5rem;
          }

          .photography-content {
            justify-content: center;
            padding-right: 2rem;
            padding-left: 2rem;
          }

          .photography-content .content {
            margin: 0;
            text-align: center;
            padding: 2rem;
          }

          .content h2 {
            font-size: 2rem;
          }

          .content p {
            font-size: 1rem;
          }
        }

        .design-section .content-wrapper {
          align-items: flex-end; /* Align to bottom */
        }

        .design-section .content {
          width: 100%;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.5); /* Half opaque */
          border-radius: 0;
          padding: 4rem;
          margin: 0;
          box-shadow: none;
        }

        .design-section .content h2 {
          text-align: left;
        }

        .design-section .content p {
          text-align: left;
          max-width: 800px;
        }

        .design-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Update overlay for design section */
        .design-section .overlay {
          background: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .design-section .content {
            padding: 3rem 0;
          }

          .design-section .content h2,
          .design-section .content p {
            text-align: center;
          }
        }

        .photography-section .content-wrapper {
          justify-content: flex-end;
          padding: 0;
        }

        .photography-section .content {
          height: 100vh;
          width: 40%; /* Adjust width as needed */
          max-width: none;
          margin: 0;
          padding: 0;
          border-radius: 0;
          background: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          box-shadow: none;
        }

        .photography-section .container {
          padding: 2rem 4rem;
        }

        .photography-section h2 {
          text-align: left;
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #333;
        }

        .photography-section p {
          text-align: left;
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: #444;
        }

        /* Update overlay for photography section */
        .photography-section .overlay {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 992px) {
          .photography-section .content {
            width: 50%;
          }

          .photography-section .container {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .photography-section .content {
            width: 100%;
            height: auto;
            padding: 4rem 0;
            position: absolute;
            bottom: 0;
          }

          .photography-section h2,
          .photography-section p {
            text-align: center;
          }

          .photography-section .container {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
          }
        }

        .contact-section {
          padding: 5rem 0;
          background: #f8f9fa;
          position: relative;
          z-index: 10;
        }

        .contact-section h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .contact-section .lead {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 2rem;
        }

        .contact-options {
          display: flex;
          justify-content: center;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 3rem 0;
          }

          .contact-section h2 {
            font-size: 2.5rem;
          }
        }

        .btn {
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .btn i {
          font-size: 1.2rem;
        }

        #design-section {
          scroll-margin-top: 60px; /* Adjust based on your header height */
        }
      `}</style>
        </>
    );
}
