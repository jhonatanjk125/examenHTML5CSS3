function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    var mediaQuery = window.matchMedia("(max-width: 900px)");
    if (mediaQuery.matches) {
      menuToggle.classList.toggle('active')
      navigation.classList.toggle('active')
    }
    else {
      return
    }

  }

  function toggleCart(){
    const menuToggle = document.querySelector('.cart-toggle');
    const navigation = document.querySelector('.cart-nav');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

  }