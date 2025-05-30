// فایل layout.js

const headerHTML = `
<!-- Header -->
<nav class="navbar navbar-expand-lg main-header">
    <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="index.html">
            <img src="img/fitjob logo.png" height="50px" alt="FitJob Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbar">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="index.html">خانه</a></li>
              <li class="nav-item"><a class="nav-link" href="blog.html">وبلاگ</a></li>
              <li class="nav-item"><a class="nav-link" href="about-us.html">درباره ما</a></li>
              <li class="nav-item"><a class="nav-link" href="contact-us.html">تماس با ما</a></li>
              <li class="nav-item"><a class="nav-link" href="order.html">دریافت رژیم</a></li>
              <li class="nav-item"><a class="nav-link" href="calculator.html">ماشین‌حساب</a></li>
            </ul>


            <!-- دکمه ورود/ثبت‌نام -->
            <a href="login-register.html" class="btn ms-2" style="background-color: #fcd34d ;">ورود / ثبت‌نام</a>

          </div>
          
    </div>
</nav>
`;

const footerHTML = `
<!-- Footer -->
<footer class="footer text-white py-4" dir="rtl">
  <div class="container">

    <br><br>

    <div class="row">
      <div class="col-md-3">
        <a class="navbar-brand" href="index.html">
          <img src="img/fitjob logo white.png" height="50px" alt="FitJob Logo">
        </a>
      </div>

      <div class="col-md-3" style="color: #fcd34d;">
        <h5>
          <i class="fas fa-link me-2"></i>          لینک‌ها
        </h5>
        <ul class="list-unstyled">
          <li><a href="index.html" class="text-white"><i class="fas fa-home ms-2"></i>خانه</a></li>
          <li><a href="blog.html" class="text-white"><i class="fas fa-blog ms-2"></i>وبلاگ</a></li>
          <li><a href="contact-us.html" class="text-white"><i class="fas fa-phone-alt ms-2"></i>تماس با ما</a></li>
          <li><a href="faq.html" class="text-white"><i class="fas fa-question-circle ms-2"></i>سوالات متداول</a></li>
          <li><a href="terms.html" class="text-white"><i class="fas fa-file-contract ms-2"></i>قوانین و مقررات</a></li>
        </ul>
      </div>

      <div class="col-md-3">
        <h5 style="color: #fcd34d;">
          <i class="fas fa-paper-plane"></i> ارتباط با ما
        </h5>
        <p>
          <i class="fas fa-envelope ms-2"></i>
          ایمیل:
          <a href="mailto:info@fitjob.com" class="text-white">info[at]fitjob.com</a>
        </p>
        <p>
          <i class="fas fa-phone ms-2"></i>
          تلفن:
          <a href="tel:0253333333" class="text-white" dir="ltr">۰۲۵-۳۳۳۳۳۳۳</a>
        </p>
      </div>

      <!-- نقشه گوگل -->
      <div class="col-md-3">
        <h5 style="color: #fcd34d;">
          <i class="fas fa-map-marker-alt me-2"></i> موقعیت ما
        </h5>        
        <div class="ratio ratio-4x3 rounded overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1381.383505070901!2d50.81211789202067!3d34.566157679477804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f93a3d0521940c5%3A0xfb39e13adacfccdc!2sQom%20Girls%20National%20University%20of%20Skills!5e0!3m2!1sen!2sus!4v1747921295436!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
    </div>

    <div class="text-center pt-3" style="color: #fcd34d;">
      <p class="mb-0">&copy; 2025 <a href="index.html">فیت‌جاب</a> - تمامی حقوق برای فاطمه سادات رضوی و فاطمه عزت‌نشان محفوظ است.</p>
    </div>
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('header').innerHTML = headerHTML;
  document.getElementById('footer').innerHTML = footerHTML;
});
