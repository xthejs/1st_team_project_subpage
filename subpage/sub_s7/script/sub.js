const tabBtn = $(".tab_btn > ul > li");
      const skill = $(".skill > ul > li");
      const tabImg = $(".tab_img > ul > li");
      const tabtxt = $(".tab_txt > ul > li");

      skill.hide().eq(0).show();
      tabImg.hide().eq(0).show();
      tabtxt.hide().eq(0).show();

      tabBtn.click(function (e) {
        e.preventDefault();

        tabBtn.removeClass("active");
        $(this).addClass("active");

        let target = $(this);
        let index = target.index();

        skill.hide().eq(index).show();
        tabImg.hide().eq(index).show();
        tabtxt.hide().eq(index).show();
      });

      const mapTap = $(".map_tab > ul > li");
      const mapImg = $(".map_img > ul > li");

      mapImg.hide().eq(0).show();

      mapTap.click(function (e) {
        e.preventDefault();

        mapTap.removeClass("active");
        $(this).addClass("active");

        let target = $(this);
        let index = target.index();

        mapImg.hide().eq(index).show();
      });