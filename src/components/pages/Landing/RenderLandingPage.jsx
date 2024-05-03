import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      <div className="graphs-section">
        <div className="graph">
          <img src={GrantRatesByOfficeImg} alt="Grant Rates By Office" />
        </div>
        <div className="graph">
          <img src={GrantRatesByNationalityImg} alt="Grant Rates By Nationality" />
        </div>
        <div className="graph">
          <img src={GrantRatesOverTimeImg} alt="Grant Rates Over Time" />
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          Download the Data
        </Button>
      </div>



      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>

   <div className='bottom-section'>
  <h1 className='sditext'>Systemic Disparity Insights</h1>
    <div className='boxes'>
     <div className='left-box'>
      <div className='thirty-percent'>36%</div>
        <div className='thirty-text'>By the end of the Trump administration, the average
        asylum office grant rate had fallen 36 percent from an average
        of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020</div>
        </div>
    <div className='middle-box'>
     <div className='five-percent'>5%</div>
     <div className='five-text'>The New York Asylum Office grant rate
     dropped to 5 percent in fiscal year 2020</div>
    </div>
    <div className='right-box'>
     <div className='six-times'>6X Lower</div>
     <div className='six-text'>Between fiscal year 2017 and 2020,
     the New York Asylum Office's average grant rate was six times lower than the San Francisco Asylum Offlice</div>
    </div>
  </div>






  <div className='read-more'>
  <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        >
          Read More
        </Button>
  </div>


        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}

export default RenderLandingPage;
