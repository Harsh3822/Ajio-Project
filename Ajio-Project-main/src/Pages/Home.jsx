import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
import { Carousel } from 'react-bootstrap';
import {CarouselItem } from 'react-bootstrap';
import { MdCurrencyExchange } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>  
      {/* First */}
      <Carousel controls={false} className='sec-first'>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-MainBanner-Z1-P1-PaydaySale.gif"
          alt="img-1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-Fashionation-UHP-29072024-EntryPoint-FullBanner.jpg"
          alt="img-2"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-31072024-MainBanner-Goldmela-New.jpg"
          alt="img-3"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-31072024-Z1-ClearanceSale-Flat75.jpg"
          alt="img-4"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-MainBanner-Z3-P1-Vanheusen-Wrangler-Min40-New.jpg"
          alt="img-5"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-MainBanner-Z3-P3-REDTAPE-CAMPUSSUTRA-FLAT72.jpg"
          alt="img-6"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-MainBanner-Z3-P4-CLOVIA-M&S-MIN50.jpg"
          alt="img-7"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-MainBanner-Z3-P5-LAVIE-ACCESSORIZELONDON-MIN60.jpg"
          alt="img-8"
        />
      </CarouselItem>
    </Carousel>

      {/* second */}
      <Carousel className="sec-slide" controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/Federal%20Bank-1440x128---.jpg"
            alt="img-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-PP-JUL.jpg"
            alt="img-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg"
            alt="img-3"
          />
        </Carousel.Item>
      </Carousel>

      {/* third */}
      <div className='third-div overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/180724-D-1.0-UHP-RHS-seasonsitstyles-header.jpg" alt="" className='w-100' />
      </div>

      {/* fourth */}
      <Carousel controls={false} className='sec-four'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mercury.akamaized.net/i/331e10dd7a31dfb5f29f96cf36c5637e_279362_0.png"
            alt="img-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mercury.akamaized.net/i/912adf42349cf6ab41626de13a5fc72a_280616_0.png"
            alt="img-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mercury.akamaized.net/i/1e081b17c83575630f2e30b18bf600ea_101925_0.png"
            alt="img-3"
          />
        </Carousel.Item>
      </Carousel>

      {/* fifth */}
      <div className='sec-fifth overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/180724-D-1.0-UHP-RHS-newtoday-header.jpg" alt="" className='w-100' />
      </div>

      {/* sixth */}
      <Carousel controls={false} className='sec-six overflow-hidden'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-BrandHour-Z3-P4-FREAKINS-MIN50.jpg"
            alt="img-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-TopBanner-Z3-P2-ADIDAS-NIKE-MIN40.jpg"
            alt="img-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-TopBanner-Z3-P3-KOTON-TRENDYOL-FLAT50.jpg"
            alt="img-3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-TopBanner-Z3-P4-TEAMSPIRIT-DNMX-UNDER499.jpg"
            alt="img-4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01082024-TopBanner-Z3-P5-BROADSTAR-KOTTY-FLAT65.jpg"
            alt="img-5"
          />
        </Carousel.Item>
      </Carousel>


      {/* seven */}
      <div className='sec-seven overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/180724-D-1.0-UHP-RHS-toprated-header.jpg" alt="" className='w-100' />
      </div>
      <div className="mt-2">
        <div className="images-slide d-flex justify-content-evenly flex-wrap Top-Picks" style={{backgroundColor:'#CCE3AD'}}>
          <Link to={"/toppicks"}>
            <div className="d-flex flex-wrap pic-slider">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 overflow-hidden">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-Gap-Superdry-Min40.jpg"
                  alt=""
                  className="img-fluid Top-Picks1"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 overflow-hidden">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-Nike-Adidas-Min40.jpg"
                  alt=""
                  className="img-fluid Top-Picks2"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 overflow-hidden">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-Levis-USPA-Min50.jpg"
                  alt=""
                  className="img-fluid Top-Picks3"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 overflow-hidden">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-Dnmx-Netplay-Under499.jpg"
                  alt=""
                  className="img-fluid Top-Picks4"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Eight */}
      <Carousel controls={false} className='sec-eight overflow-hidden'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-PP-JUL.jpg"
          alt="img-1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png"
          alt="img-2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20(1)111.png"
          alt="img-3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-BANKOFFERS-relianceone.jpg"
          alt="img-4"
        />
      </Carousel.Item>
    </Carousel>

      {/* Nineth */}
      <div className='sec-nine overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/M-21072024-TrendsSIS-fallwinter24strip.jpg" alt="" className='w-100' />
      </div>

      {/* Tenth */}
      <div className="container-fluid six-box" style={{ backgroundColor: 'black' }}>
        <div className="row justify-content-evenly three-box1">
          <div className="col-12 col-sm-6 col-md-4 d-flex overflow-hidden 1-box">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-21072024-TrendsSIS-BagTheClosetBasics-kurtas&kurtis-starting499.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex overflow-hidden 2-box">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-21072024-TrendsSIS-BagTheClosetBasics-dresses-starting499.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex overflow-hidden 3-box">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-21072024-TrendsSIS-BagTheClosetBasics-tshirts-starting199.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row justify-content-evenly three-box2">
          <div className="col-12 col-sm-6 col-md-4 d-flex overflow-hidden 4-box">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-21072024-TrendsSIS-BagTheClosetBasics-trousers-starting699.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex overflow-hidden 5-box">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-21072024-TrendsSIS-BagTheClosetBasics-tops-starting199.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex overflow-hidden 6-box">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-21072024-TrendsSIS-BagTheClosetBasics-boysteesshirts-starting249.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      
      {/* Eleven */}
      <div className='sec-eleven overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DailyFitCheck-Header-rev.jpg" alt="" className='w-100' />
      </div>

      {/* twelth */}
      <Carousel controls={false} className='sec-twelth overflow-hidden'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mercury.akamaized.net/i/043113544ad5e253c45edc2418bbc6ca_102394_0.png"
          alt="img-1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mercury.akamaized.net/i/fa8943fb0296da16c9b0de1004924244_102403_0.png"
          alt="img-2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mercury.akamaized.net/i/331e10dd7a31dfb5f29f96cf36c5637e_279362_0.png"
          alt="img-3"
        />
      </Carousel.Item>
    </Carousel>

    {/* thirteen */}
    <Carousel controls={false} className='sec-thirteen overflow-hidden'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-PP-JUL.jpg"
          alt="img-1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png"
          alt="img-2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20(1)111.png"
          alt="img-3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-BANKOFFERS-relianceone.jpg"
          alt="img-4"
        />
      </Carousel.Item>
    </Carousel>
     {/* fourteen */}
     <div className='sec-fourteen overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-ServingDapperStylesFor%20Him-Header-rev.jpg" alt="" className='w-100' />
      </div>

    {/* fifteen */}
    <Carousel controls={false} className='sec-fifteen overflow-hidden'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-uhphim-z10-p1-PUMA-FILA-MIN40.jpg"
          alt="img-1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-uhphim-z10-p1-PUMA-FILA-MIN40.jpg"
          alt="img-2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-uhphim-z10-p3-Tommy-CK-UPTO40.jpg"
          alt="img-3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-uhphim-z10-p4-LOUIS-ARROW-MIN30.jpg"
          alt="img-4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-uhphim-z10-p5-BROOKS&BROTHERS-REPLAY-UPTO50.jpg"
          alt="img-4"
        />
      </Carousel.Item>
    </Carousel>

    {/* Sixteen */}
        <div className="d-flex justify-content-center flex-wrap sixteen-slide"style={{backgroundColor:'#278BDB'}}>
          <Link to={"/trendings"}>
            <div className="d-flex flex-wrap" >
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 overflow-hidden">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-Trends-Avaasa-Netplay-40to60.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 overflow-hidden">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-Trends-Fig-DNMX-Starting499.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 overflow-hidden">
                <img
                  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03082024-Trends-Azorte-Outryt-Altheory-Flat50.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </Link>
        </div>
      {/* Seventeen */}
      <div className='sec-seventeen overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-CelebrateTheVibe-Header-rev.jpg" alt="" className='w-100' />
      </div>
       {/* eighteen */}
       <Carousel controls={false} className='sec-fifteen overflow-hidden'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P1-Stylum-GulmoharJaipur-UNDER1299.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P2-CampusSutra-MIN50.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P4-MissChase-ZinkLondon-Starting599.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P3-HiAttitude-Frisbee-Starting199.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P4-MissChase-ZinkLondon-Starting599.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P5-Sojanya-SeeDesigns-MIN65.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P6-Freakins-MIN50.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020824-EMB-Z11-P7-Glito-Ivoc-MIN60.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
     {/* nineteen */}
     <div className='sec-seventeen overflow-hidden'>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Header.jpg" alt="" className='w-100' /></div>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-AJIOGold.jpg" alt="" className='w-100' /></div>
        <div className='d-flex justify-content-evenly overflow-hidden' style={{backgroundColor:'#2A62AF'}}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Trends.jpg" alt=""/>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Indie.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Home.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Sneakerhodd.jpg" alt="" />
        </div>
        <div className='d-flex justify-content-evenly overflow-hidden' style={{backgroundColor:'#2A62AF'}}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-WeddingStore.jpg" alt=""/>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-SareeStore.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Watches.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Westernwear.jpg" alt="" />
        </div>
        <div className='d-flex justify-content-evenly overflow-hidden' style={{backgroundColor:'#2A62AF'}}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Accessories.jpg" alt=""/>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Beauty.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-InternationalBrands.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02082024-DiscoverOnlineStore-Homegrownbrands.jpg" alt="" />
        </div>
      </div>
       {/* Twenty */}    
       <div className='sec-twenty overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/22072024-D-DiscoverOnlineStores.jpg" alt="" className='w-100' />
       </div>
       <div className='sec-twenty overflow-hidden'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip11.jpg" alt="" className='w-100' />
       </div>
       <div className='sec-twenty overflow-hidden fs-1 d-flex justify-content-around mt-4'>
       <div className='text-center'><MdCurrencyExchange />
       <h4 className='mt-2'>Easy Exchange</h4>
       </div>
       <div className='text-center'>
        <FaHandHoldingHeart />
        <h4>100% HANDPICKED</h4>
        </div>
       <div className='text-center'>
        <IoCheckmarkDoneCircleOutline />
        <h4>ASSURED QUALITY</h4>
       </div>
       </div>

       {/* Twenty-one */} 
       <div>
        <Footer />
       </div>
    </div> 
  )
}

export default Home
