import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-text-mentor">Cerita Mereka</h1>
        <p className="primary-text">
        Yuk simak kisah teman - teman yang sudah merasakan aplikasi ini
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <p>
        “Banyak belajar hal baru selain masalah desain yang terselesaikan,
        saya dapat banyak ilmu baru dari para expert”
        </p>

        <h3>Jhon kick - human resource</h3>
        
      </div>
      <div className="testimonial-section-bottom">
        <p>
        “Terimakasih berkat Develov saya jadi bisa mencari uang sampingan melalui freelance
        dan membuat client puas”
        </p>

        <h3>Jonathan - Penggiat Teknologi</h3>
        
      </div>

      <div className="testimonial-section-bottom">
        <p>
        “Desain + Digital Marketing membuat pendapat saya menjadi bertambah, Terimakasih Develov”
        </p>

        <h3>Asmorojo - Penggiat Teknologi</h3>
        
      </div>
      
      
    </div>
  );
};

export default Testimonial;
