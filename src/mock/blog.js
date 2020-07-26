
import faker from "faker";
 

  
  var listBlogs = [
    {
      id: 1,
      title_blog: "LÀM VỢ ANH, EM NHÉ",
      content:
        "Truyện kể về Mia Chen, Giám Đốc thời trang của một tạp chí lớn. Cô gái này chẳng những thông minh, cá tính mà còn có siêu năng lực nữa. Vào sinh nhật lần thứ 24, sau khi từ chối lời cầu hôn của bạn trai, trong lúc đang ngồi trong công viên thì bỗng sét đánh ầm ầm rồi mặt đất nứt ra, từ trong thân cây cổ thụ bỗng có một chàng trai mặc đồ cổ trang bước ra. Trước tình huống quái gở này, Mia không biết phải làm sao vì anh ta vừa bước ra đã ngất xỉu, không thể bỏ mặc được nên cô đành mang chàng trai...",
      thumb_blog: "pic7.jpg",
      fullName: "Trần Văn Lan",
      creat_at: faker.date.past()
    },
    {
      id: 2,
      title_blog: "HÃY TIN VÀO CHÍNH MÌNH",
      content:
        "Tôi đã từng bị mắc kẹt trong hàng tá câu hỏi như thế. Và tôi cứ loay hoay tìm câu trả lời, tự đo đếm và nặn ép bản thân mình sao cho vừa vặn với khuôn mẫu của một ai khác, bỏ quên đi cuộc sống của riêng mình. Cho tới bây giờ, tôi nhận ra rằng đó là một việc làm ngu ngốc. Tôi hối tiếc khi mình đã lãng phí thời gian chạy đuổi theo cái bóng của người khác một cách vô ích, quay cuồng với nhịp sống của họ, tự ép đặt bản thân vào cái hộp chật hẹp, để những điều tốt đẹp trong cuộc sống trôi lọt qua kẽ tay. Giờ đây, tôi đã xóa bỏ hết những câu hỏi khờ dại trước kia, dần dần nhận thức được giá trị của bản thân, tự tin vươn vai thể hiện chất riêng của mình, và mỗi ngày trôi qua đối với tôi thật hạnh phúc, ý nghĩa.",
      thumb_blog: "pic8.jpg",
      fullName: "Trần Văn Thắng",
      creat_at: faker.date.past()
    },
    {
      id: 3,
      title_blog:
        "ĐỪNG BAO GIỜ ĐỂ DÀNH NHỮNG THỨ TỐT ĐẾN NGÀY ĐẶC BIỆT MỚI DÙNG",
      content:
        "Nhiều năm trước, tôi cùng trò chuyện với một người bạn học. Khi đó, vợ anh vừa mới mất chưa được bao lâu, anh ấy nói với tôi rằng, trong lúc anh đang thu dọn đồ vật của vợ, phát hiện một chiếc khăn choàng cổ làm bằng tơ lụa. Chiếc khăn đó được mua ở một cửa hàng nổi tiếng khi hai vợ chồng họ đến du lịch ở New York. Đó là một chiếc khăn choàng hàng hiệu tao nhã, đẹp đẽ. Cái tem giá cả đắt đỏ vẫn còn treo trên đó, vợ anh cứ mãi không nỡ lấy ra dùng mà cứ đợi đến ngày đặc biệt. Nói đến đây, anh ngừng lại, tôi cũng không nói gì thêm, đợi đến một hồi lâu, anh nói: “Đừng bao giờ để dành những thứ tốt đến ngày đặc biệt mới dùng, mỗi một ngày ta sống đều là ngày đặc biệt rồi“.",
      thumb_blog: "pic11.jpg",
      fullName: "Trần Văn Lan",
      creat_at: faker.date.past()
    },
    {
      id: 4,
      title_blog: "NÉN BẠC ĐÂM TOẠC LÒNG NGƯỜI",
      content:
        "Mỗi ngày ai cũng không khỏi lo lắng những chuyện cơm áo gạo tiền, cho dù bạn có tấm lòng từ bi hỷ xả, cao lớn đến đâu thì cũng không rời xa chữ tiền. Tuy nhiên, mỗi người sẽ có cách nhìn nhận về tiền khác nhau, có người vì tiền mà mất hết nhân tính, có người vì tiền mà đổi trắng thay đen – biến không thành có, đổ lỗi cho người khác, có người vì tiền mà lừa lọc dối trá, bất chấp thủ đoạn, thậm chí có người vì tiền mà tìm cách giết hại cả người thân ruột thịt.Thứ dễ đổi thay nhất là lòng người, thứ làm cho lòng người thay đổi là vật chất, tiền bạc. Bởi trong số những thèm muốn và đam mê của loài người, cho dù chính đáng hay không, cho dù ở bất cứ vị trí nào trong xã hội thì đam mê tiền bạc luôn đứng hàng đầu.",
      thumb_blog: "pic10.jpg",
      fullName: "Trần Văn Hải",
      creat_at: faker.date.past()
    },
    {
      id: 5,
      title_blog: "HOA ANTI",
      content:
        'Tối qua lúc nó đang ngồi viết lách trong phòng, nó để ý thấy có mấy người đến hỏi anh chủ phòng trọ xem còn phòng nào trống không? Nó biết, anh chủ cũng biết phòng trọ thì đã hết. Nhiều người thuê phòng quá, từ dân buôn bán tứ xứ, công nhân, cặp sinh viên sống thử, dân phụ hồ, bốc vác... Nó thì một thân một mình, bố chết, mẹ thì sống với đứa em gái đã yên bề gia thất. Một mình nó ở giữa cái đất Cẩm Phả này, không bạn bè, người thân. Nếu không tìm được việc làm thì làm sao nó tồn tại được. Đang ngồi nghỉ ở một gốc cây, nghĩ vậy, nó lại đứng dậy toan định đi, bất chợt một mùi hương sộc vào mũi làm nó khó chịu. Một mùi hương quen thuộc mà lạ lẫm, mùi gì vậy, thối không ra thối, thơm không ra thơm, hăng hắc nồng nồng. Nó ngước mắt lên trời nhìn, nơi vòm lá xanh xum xuê vừa che nắng chỗ chân nó ngồi, nó nhìn thấy những chùm hoa màu trắng, tua tủa như súp nơ, hoa gì đây? Rõ ràng nó chẳng biết tí gì về hoa, nhưng nó khẳng định luôn từ bây giờ nó sẽ là "anti fan" cái loại hoa này. Nó bước vội để cô gắng thoát khỏi cái mùi hoa "anti" đấy, "anti" là tên gọi nó vừa tự sáng chế ra dành riêng cho loài hoa mà nó cho là đáng ghét nhất đối với cá nhân nó mà nó vừa tình cờ gặp được. Kỳ lạ thay, càng đi xa, mùi hương hoa anti càng nồng nàn và bay xa, nó nhăn nhó, nó mệt mỏi, nó nhăn mặt vì áp lực của cuộc sống, tiếng xe máy, xe ôtô, bán tải thi nhau gào rú, bon chen, bấm còi inh ỏi trên đường và cả vì cái mùi hoa nồng nặc thoang thoảng khắp mọi ngõ ngách. Sộc vào mũi nó. Nó đưa tay lên bịt mũi, vừa đi vừa chạy, nó căm thù loài hoa này...',
      thumb_blog: "pic11.jpg",
      fullName: "Trần Văn Lan",
      creat_at: faker.date.past()
    },
    {
      id: 6,
      title_blog: "THỜI ĐẠI SIÊU ANH HÙNG",
      content:
        "Ngày 21 tháng 5 năm 2014. Hôm nay là thứ bảy, mọi người đều được nghỉ nhưng Hải vẫn đi làm, anh là nhân viên của tòa soạn Tân Văn Minh - một tòa soạn mới thành lập không lâu nằm ở ngoại thành thủ đô Hà Nội. Ngồi đánh máy đến 12 giờ trưa, Hải đeo cái ba lô nặng trịch như ba lô của đám học sinh tiểu học ngày nay, ngồi lên yên con xe wave đã cũ nhưng được lau rửa rất kĩ của mình. Hôm nay Hải sẽ không về căn phòng trọ chật hẹp trong cái ngõ nhỏ mà anh đi về phía Tây - nơi anh muốn thu thập tin tức về những bức xúc trong người dân về việc thu hồi đất của chính quyền địa phương. Công việc rất suôn sẻ, những bài viết của anh được ghi nhận khách quan, chính quyền cấp trên cũng đã vào cuộc và xử lý những người có sai phạm. Cả nước được biết đến vụ việc đó, vụ việc mà nhân dân giành được công lý, những tấm hình chụp nụ cười của những chiến sĩ cảnh sát cơ động và người dân của Hải trở nên nổi tiếng. Hải vui sướng về thành quả của mình cũng như ý nghĩa của công việc. Ngày mai Hải có thể tự thưởng cho mình một ngày nghỉ bên bạn bè.",
      thumb_blog: "pic8.jpg",
      fullName: "Trần Văn Lan",
      creat_at: faker.date.past()
    },
    {
      id: 7,
      title_blog: "ĐỪNG CỐ GẮNG ĐI TÌM CÁI HOÀN HẢO",
      content:
        "Trong văn hóa Nhật Bản, thuật ngữ Wabisabi (侘びさび) cũng quan trọng không kém phong thủy của người Trung Hoa. Wabi có nghĩa là khiêm tốn, giản dị; còn Sabi nói về vẻ đẹp của tạo hóa, của thời gian. Kết hợp lại, Wabi sabi là tính thẩm mỹ của những gì tự nhiên nhất. Đó là vẻ đẹp của những điều không hoàn hảo, vô thường và dở dang; vẻ đẹp của những thứ bất toàn và chưa trọn vẹn; vẻ đẹp của những thứ khiêm tốn và nhún nhường; vẻ đẹp của những thứ bất thường và khiếm khuyết.Với Wabi-Sabi thì cái đẹp không có khái niệm, không mang tính khoa học mà thuộc về cảm nhận giác quan tâm hồn, nó nằm ở rìa hư vô, nên nó gắn liền với cảm xúc của từng người, vì thế mà nó không được xác định một cách rõ ràng, chỉ đến từ sự thuần tuý vốn có của tạo hoá tự nhiên, hoàn toàn vô điều kiện, và đó cũng chính là điểm khác biệt giữa nét đẹp theo triết lý Wabi-Sabi so với nét đẹp hoàn hảo mà nhiều người cố gắng tìm kiếm",
      thumb_blog: "pic11.jpg",
      fullName: "Trần Văn Lan",
      creat_at: faker.date.past()
    },
    {
      id: 8,
      title_blog: "LÀM VỢ ANH, EM NHÉ",
      content:
        "Truyện kể về Mia Chen, Giám Đốc thời trang của một tạp chí lớn. Cô gái này chẳng những thông minh, cá tính mà còn có siêu năng lực nữa. Vào sinh nhật lần thứ 24, sau khi từ chối lời cầu hôn của bạn trai, trong lúc đang ngồi trong công viên thì bỗng sét đánh ầm ầm rồi mặt đất nứt ra, từ trong thân cây cổ thụ bỗng có một chàng trai mặc đồ cổ trang bước ra. Trước tình huống quái gở này, Mia không biết phải làm sao vì anh ta vừa bước ra đã ngất xỉu, không thể bỏ mặc được nên cô đành mang chàng trai...",
      thumb_blog: "pic10.jpg",
      fullName: "Trần Văn Lan",
      creat_at: faker.date.past()
    },
    {
      id: 9,
      title_blog: "LÀM VỢ ANH, EM NHÉ",
      content:
        "Truyện kể về Mia Chen, Giám Đốc thời trang của một tạp chí lớn. Cô gái này chẳng những thông minh, cá tính mà còn có siêu năng lực nữa. Vào sinh nhật lần thứ 24, sau khi từ chối lời cầu hôn của bạn trai, trong lúc đang ngồi trong công viên thì bỗng sét đánh ầm ầm rồi mặt đất nứt ra, từ trong thân cây cổ thụ bỗng có một chàng trai mặc đồ cổ trang bước ra. Trước tình huống quái gở này, Mia không biết phải làm sao vì anh ta vừa bước ra đã ngất xỉu, không thể bỏ mặc được nên cô đành mang chàng trai...",
      thumb_blog: "pic9.jpg",
      creat_at: "Tue Nov 27 2018 20:22:11 GTM+0700"
    },
    {
      id: 10,
      title_blog: "LÀM VỢ ANH, EM NHÉ",
      content:
        "Truyện kể về Mia Chen, Giám Đốc thời trang của một tạp chí lớn. Cô gái này chẳng những thông minh, cá tính mà còn có siêu năng lực nữa. Vào sinh nhật lần thứ 24, sau khi từ chối lời cầu hôn của bạn trai, trong lúc đang ngồi trong công viên thì bỗng sét đánh ầm ầm rồi mặt đất nứt ra, từ trong thân cây cổ thụ bỗng có một chàng trai mặc đồ cổ trang bước ra. Trước tình huống quái gở này, Mia không biết phải làm sao vì anh ta vừa bước ra đã ngất xỉu, không thể bỏ mặc được nên cô đành mang chàng trai...",
      thumb_blog: "pic8.jpg",
      fullName: "Trần Văn Lan",
      creat_at: faker.date.past()
    }
  ]
export default listBlogs;