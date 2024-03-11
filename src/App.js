
import './App.css';
// import { Canvas } from 'react-three-fiber';
import { Model } from './Component/Olive';
// import { CameraProvider } from "./Component/Cameramove.jsx";
import { Environment, Scroll, ScrollControls } from '@react-three/drei';

function App() {
  return (
    <ScrollControls pages={4.15} damping={1}>
  

 <Scroll html >
               <div className='wrapper'>
   
 
   <h1 className='d'>
   المعصرة الليبية
   </h1>
  <nav >
    <ul className='ul'>
      <li>Home</li>
      <li>Products</li>

      <li>About Us</li>

      <li>Contact</li>

      <li>Gallery</li>


    </ul>
  </nav>
  <button className="cta-button">اشترِ الآن</button>


 
    
  </div>


                <div className='div'>
              <section className='sec'>
              <h1 className='h'>المعصرة الليبية</h1>
              </section>
              <section className='sec'>
              <p className='p'>
زيت الزيتون هو منتج طبيعي فريد ومفيد للغاية، حيث يعتبر ركيزة أساسية في العديد من الثقافات والمطابخ حول العالم. تاريخيًا، كانت الزيتون وزيتها يحظى بتقدير كبير في المنطقة البحرية المتوسطية، حيث كان يُعتبر رمزًا للتغذية الصحية والحياة الطويلة. واليوم، يتمتع زيت الزيتون بشهرة عالمية واسعة بفضل فوائده الصحية العديدة ومذاقه الرائع.</p>
              </section>
              <section className='sec'>
              <h1 className='h2'>يعتبر زيت الزيتون غنيًا بالدهون الصحية والمضادات الأكسدة، وهو يوفر فوائد متعددة للصحة، بما في ذلك دعم القلب والأوعية الدموية، وتحسين وظائف الجهاز الهضمي، وتقوية جهاز المناعة. بالإضافة إلى ذلك، يُعتبر زيت الزيتون مثاليًا للاستخدام في الطهي، والتبديل الصحي للزيوت الأخرى، كما أنه يضيف نكهة رائعة وعمقًا إلى مختلف الأطباق. </h1>
              </section>
              <section className='sec'>
              <div className="card">
  
   <div className="card-body">
    <h2 className="card-title">زيت الزيتون الفاخر</h2>
    <p className="card-text">استمتع بأرقى زيت الزيتون من البحر الأبيض المتوسط.</p>
    <button className="cta-button">اشترِ الآن</button>
      </div>
    </div>
              </section>
            
              </div>
    
            </Scroll>
            <Environment files="blue_photo_studio_1k.hdr"  />
  <Model/>


 </ScrollControls>
  
  );
}

export default App;
