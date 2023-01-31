import React from 'react';
import './Home.css';

import card from '../../assets/Plot.png';
import dots from '../../assets/dots.png';
import vector from '../../assets/Vector.png';

import Modal from '../Modal/Modal';
import Fields from '../Fields/Fields';
import Button from '../Button/Button';

const Home = () => {
  return (
    <div className="home">
      <h2>بطاقة قطعة</h2>
      <div className="main">
      <div className="info">
        <div className="item">
          <p className="text">رمز البطاقة</p>
          <p className="code">123</p>
        </div>
        <div className="fields">
          <Fields name={"الوصف"}/>
          <Fields name={"الاسم الثلاثي"}/>
          <Modal name={"الماركة"} api={"https://easybooks.me/codechallenge/code-challenge.php?get=brands"}/>
          <Fields name={"الموديل"} image={dots} state={true}/>
          <Fields name={"الرقم التسلسلي"} image={dots} state={true}/>
          <Fields name={"معرف القطعة"} image={dots} state={true}/>
          <Fields name={"الحالة"} image={vector} state={true} text={"تعمل"}/>
          <Modal name={"المالك"} api={"https://easybooks.me/codechallenge/code-challenge.php?get=owners"}/>
          <Fields name={"اللون"} image={vector} state={true}/>
          <Fields name={"سنة التصنيع"} image={vector} state={true}/>
          <Fields name={"الفرش "} image={vector} state={true}/>
          <Fields name={"الوقود"} image={vector} state={true}/>
        </div>
      </div>
      <div>
      <div className="plot">
        <p>صورة القطعة</p>
        <img src={card} alt=""/>
      </div>
      <div className="buttons">
        <Button name={"جديد"} color={"#454955"}/>
        <Button name={"حفظ"} color={"#454955"}/>
        <Button name={"حذف"} color={"#9E0000"}/>
        <Button name={"إغلاق"} color={"#3F7D20"}/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home;
