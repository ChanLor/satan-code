function call_data()
{
		var i= document.getElementById('search').value;
		//enum
		var idx;
		(function (idx) {
    		idx[idx["Mimee"] = 0] = "Mimee";
    		idx[idx["Phanousone"] = 1] = "Phanousone";
    		idx[idx["Phonephasert"] = 2] = "Phonephasert";
    		idx[idx["Soukkasem"] = 3] = "Soukkasem";
    		idx[idx["Ananh"] = 4] = "Ananh";
    		idx[idx["Avone"] = 5] = "Avone";
    		idx[idx["Soukthave"] = 6] = "Soukthave";
    		idx[idx["Souvanh"] = 7] = "Souvanh";
    		idx[idx["Leeching"] = 8] = "Leeching";
    		idx[idx["Thipphaphone"] = 9] = "Thipphaphone";
    		idx[idx["Phongphatz"] = 10] = "Phongphatz";
    		idx[idx["Phuangphet"] = 11] = "Phuangphet";
    		idx[idx["Anouvong"] = 12] = "Anouvong";
    		idx[idx["Euro"] = 13] = "Euro";
    		idx[idx["Xaylor"] = 14] = "Xaylor";
    		idx[idx["Hong"] = 15] = "Hong";
    		idx[idx["Xourwang"] = 16] = "Xourwang";
    		idx[idx["Changyang"] = 17] = "Changyang";
    		idx[idx["Chanlor"] = 18] = "Chanlor";
            idx[idx["Thida"] = 19] = "Thida";
            idx[idx["Meemi"] = 20] = "Meemi";
            idx[idx["Onchan"] = 21] = "Onchan";
            idx[idx["Souliya"] = 22] = "Souliya";
            idx[idx["Silinthone"] = 23] = "Silinthone";
			})(idx || (idx = {}));
			// console.log(idx[i]);
			var idx_name = idx[i];
		// var opp = "hello";
		
		var data = [{name:'Mimee',lname:'THIPHUNTHAVONG',img:'img/IMG-20181023-WA0007.jpg'},
			 	 	 {name:'Phanousone',lname:'THIPPHAVONG',img:'img/IMG-20181023-WA0000.jpg'},
			 	 	 {name:'Phonephasert',lname:'INTHAVONG',img:'img/IMG-20181023-WA0001.jpg'},
			 	 	 {name:'Soukkasem',lname:'THONGVANH',img:'img/IMG-20181023-WA0002.jpg'},
			 	 	 {name:'Ananh ',lname:'RAJSAPHONH',img:'img/IMG-20181023-WA0003.jpg'},
			 	 	 {name:'Avone',lname:'SOUVANVIXAI',img:'img/IMG-20181023-WA0004.jpg'},
			 	 	 {name:'Soukthave',lname:'THAXANON',img:'img/IMG-20181023-WA0005.jpg'},
			 	 	 {name:'Souvanh',lname:'YUANGANONG',img:'img/IMG-20181023-WA0006.jpg'},
			 	 	 {name:'Leeching',lname:'LEE',img:'img/IMG-20181023-WA0008.jpg'},
			 	 	 {name:'Thipphaphone',lname:'PHONESAMRETH',img:'img/IMG-20181023-WA0009.jpg'},
			 	 	 {name:'Phongphatz',lname:'KHAMPHIEW',img:'img/IMG-20181023-WA0010.jpg'},
			 	 	 {name:'Phuangphet',lname:'PHOUMINITH',img:'img/IMG-20181023-WA0011.jpg'},
			 	 	 {name:'Anouvong',lname:'KAOMRMR',img:'img/IMG-20181023-WA0012.jpg'},
			 	 	 {name:'Euro',lname:'PINKEO',img:'img/IMG-20181023-WA0013.jpg'},
			 	 	 {name:'Xaylor',lname:'SOTOUKEE',img:'img/IMG-20181023-WA0014.jpg'},
			 	 	 {name:'Hong',lname:'BOUNPUNYA',img:'img/IMG-20181023-WA0015.jpg'},
			 	 	 {name:'Xourwang',lname:'UNKNOWN',img:'img/IMG-20181023-WA0016.jpg'},
			 	 	 {name:'Chang',lname:'YANG',img:'img/IMG-20181023-WA0017.jpg'},
			 	 	 {name:'Chanlor',lname:'HL',img:'img/IMG-20181023-WA0018.jpg'},
                     {name:'Thida',lname:'VONGKHAMHEUANG',img:'img/44758231_2291813904166117_1272304316782215168_n.jpg'},
                     {name:'Meemi',lname:'PHUANGPHET',img:'img/44831598_182878232629515_2655066246000672768_n.jpg'},
                     {name:'Onchan',lname:'LUANGBOUNMA',img:'img/44788967_265022477486763_5158993112546148352_n.jpg'},
                     {name:'Souliya',lname:'SISAVA',img:'img/43674849_185305532345495_7675288643090513920_n.jpg'},
                     {name:'Silinthone',lname:'OUDOM',img:'img/xxx.jpg'},
			 	 	 ];

		var img = "<img id=\"icon_idx\" src="+data[idx_name].img+"><br>";
		var mytable = "<table align=\"center\" cellspacing=\"2\" cellpadding=\"2\">"+
           " <tr>"+
                "<td id=\"td\">Name :</td>"+
                "<td>"+data[idx_name].name+"</td>"+
           "</tr>"+
            "<tr>"+
                "<td id=\"td\">Surname :</td>"+
                "<td>"+data[idx_name].lname+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td id=\"td\">Department:</td>"+
                "<td> Computer</td>"+
            "</tr>"+
            "<tr>"+
                "<td id=\"td\">Major :</td>"+
                "<td>Website development</td>"+
            "</tr>"+
            "<tr>"+
                "<td id=\"td\">Year :</td>"+
                "<td>3</td>"+
            "</tr>"+
        "</table>";
						// "<p class=\"txt_detail\">Name:"+data[idx_name].name+"</p>"+
						// "<p class=\"txt_detail\">Surname:"+data[idx_name].lname+"</p>"+
						// "<p class=\"txt_detail\">Department: Computer</p>"+
						// "<p class=\"txt_detail\">Major: Website development</p>"+
						// "<p class=\"txt_detail\">Year: 3</p>";
		document.getElementById("mySpan1").innerHTML = img;
		document.getElementById("mySpan2").innerHTML = mytable;
	
}
function showmodals(i){
	// var i= document.getElementById('btn_id').value;
	// console.log(i);
	//enum
	var idx;
	(function (idx) {
		idx[idx["Mimee"] = 0] = "Mimee";
		idx[idx["Phanousone"] = 1] = "Phanousone";
		idx[idx["Phonephasert"] = 2] = "Phonephasert";
		idx[idx["Soukkasem"] = 3] = "Soukkasem";
		idx[idx["Ananh"] = 4] = "Ananh";
		idx[idx["Avone"] = 5] = "Avone";
		idx[idx["Soukthave"] = 6] = "Soukthave";
		idx[idx["Souvanh"] = 7] = "Souvanh";
		idx[idx["Leeching"] = 8] = "Leeching";
		idx[idx["Thipphaphone"] = 9] = "Thipphaphone";
		idx[idx["Phongphatz"] = 10] = "Phongphatz";
		idx[idx["Phuangphet"] = 11] = "Phuangphet";
		idx[idx["Anouvong"] = 12] = "Anouvong";
		idx[idx["Euro"] = 13] = "Euro";
		idx[idx["Xaylor"] = 14] = "Xaylor";
		idx[idx["Hong"] = 15] = "Hong";
		idx[idx["Xourwang"] = 16] = "Xourwang";
		idx[idx["Changyang"] = 17] = "Changyang";
		idx[idx["Chanlor"] = 18] = "Chanlor";
		idx[idx["Thida"] = 19] = "Thida";
		idx[idx["Meemi"] = 20] = "Meemi";
		idx[idx["Onchan"] = 21] = "Onchan";
		idx[idx["Souliya"] = 22] = "Souliya";
		idx[idx["Silinthone"] = 23] = "Silinthone";
		})(idx || (idx = {}));
		// console.log(idx[i]);
		var idx_name = idx[i];
	// var opp = "hello";
	
	var data = [{name:'Mimee',lname:'THIPHUNTHAVONG',img:'img/IMG-20181023-WA0007.jpg',age:"19",fb:"Meemee Tptv",saya:"ມະນຸດຕ່າງດາວ",caption:"ນ້ອຍແໜ້ນໃນ"},
				   {name:'Phanousone',lname:'THIPPHAVONG',img:'img/IMG-20181023-WA0000.jpg',age:"20",fb:"Nu Thipphavong",saya:"Nunu 2 ນິ້ວ",caption:"ບໍ່ຫື່ນຢ່າເອີ້ນ ນຸ"},
				   {name:'Phonephasert',lname:'INTHAVONG',img:'img/IMG-20181023-WA0001.jpg',age:"19",fb:"Phonepaserd inthavong",saya:"ນ້ອງພີ່ທີ່ຮັກ",caption:"ຄຳຝົນມາດີ ມັນເລີຍຄົມ"},
				   {name:'Soukkaserm',lname:'THONGVANH',img:'img/IMG-20181023-WA0002.jpg',age:"20",fb:"Kuang Soukkasem",saya:"ເໝືອງທອງຄຳ ແດນຈຳປາ",caption:"caption ບໍ່ມີ ມາຫາຕອນນີ້ ຟຣີWIFI"},
				   {name:'Ananh ',lname:'RAJSAPHONH',img:'img/IMG-20181023-WA0003.jpg',age:"19",fb:"billy rsp",saya:"ບິວຕີ້",caption:"ອຸຍໆໆໆໆ ອ໋າໆໆໆໆ ອິ໋ໆໆໆໆ ໄອ໋ໆໆໆໆ"},
				   {name:'Avone',lname:'SOUVANVIXAI',img:'img/IMG-20181023-WA0004.jpg',age:"20",fb:"A Vone souvanvixai",saya:"ເຕ້ຍ",caption:"ເຖິງຈະເຕ້ຍ ແຕ່ກະເຮັດໃຫ້ເພຍໄດ້"},
				   {name:'Soukthave',lname:'THAXANON',img:'img/IMG-20181023-WA0005.jpg',age:"20",fb:"Soukthave thaxanon",saya:"ໜວດເຫຼັກ",caption:"practice makes perfect"},
				   {name:'Souvanh',lname:'YUANGANONG',img:'img/IMG-20181023-WA0006.jpg',age:"20",fb:"Sabai sabai",saya:"I'm human",caption:"ຕ່າງທີ່ຄິດຊີວິດຈຶ່ງຕ່າງ"},
				   {name:'Leeching',lname:'LEE',img:'img/IMG-20181023-WA0008.jpg',age:"21",fb:"Cheng lee",saya:"ຈູໂດ່",caption:"ຊວາ ນີ່ ມາ..."},
				   {name:'Thipphaphone',lname:'PHONESAMRETH',img:'img/IMG-20181023-WA0009.jpg',age:"19",fb:"Jeena Phonesamreth",saya:"ອີ່ໝູ ກູບໍ່ມີຜົວ",caption:"ຈີ່ນ້າເປັນຄົນສວຍຍ..ເລີຍບໍ່ມາເຊົ້າ"},
				   {name:'Phongphatz',lname:'KHAMPHIEW',img:'img/IMG-20181023-WA0010.jpg',age:"20",fb:"p'phats kps",saya:"ເຄຢູວາຍນາຍເຄເອັມ",caption:"ຄວາມຫຼໍ່ອາດບໍ່ເທົ່າຄົນອື່ນ ແຕ່ຄວາມຫື່ນຄົນອື່ນບໍ່ທຽບເທົ່າ"},
				   {name:'Phuangphet',lname:'PHOUMINITH',img:'img/IMG-20181023-WA0011.jpg',age:"20",fb:"pao phouminith",saya:"ເປົ້າແວ່ນຂະຫຍາຍ",caption:"come with me 'GB' together"},
				   {name:'Anouvong',lname:'KAOMRMR',img:'img/IMG-20181023-WA0012.jpg',age:"21",fb:"Peter Phetmany",saya:"ປີເຕີ້ 3 ແກ່ນ",caption:"I just walk not to run (ບຣາໆໆໆ ຈັກແປວ່າຫຍັງບຸ)"},
				   {name:'Euro',lname:'PINKEO',img:'img/IMG-20181023-WA0013.jpg',age: '19',fb:'Euro pinkeo',saya:"ອາຍຸນ້ອຍ100ເມຍ ແລະ ເປັນຜົວຈີ່ນ້າ",caption:"ຂ້ອຍອາດຈະດີບໍ່ຄືຄົນອື່ນ ແຕ່ຂ້ອຍກະຊົ່ວກວ່າຄົນອື່ນ"},
				   {name:'Xaylor',lname:'SOTOUKEE',img:'img/IMG-20181023-WA0014.jpg',age:"23",fb:"xaylor hm sotoukee",saya:"ຕະກູນຫຼໍ່",caption:"ຊື່ ໄຊລໍ່ ຊື່ຫຼິ້ນ ໄຊ"},
				   {name:'Hong',lname:'BOUNPUNYA',img:'img/IMG-20181023-WA0015.jpg',age:"21",fb:"ເດັກຊາຍຊົນນະບົດ ຮອງ",saya:"ອາຈະແກ",caption:"ຄວາມຜິດພາດມັນເປັນປະສົບການ ຄວາມຢ້ານຄືການຮຽນຮູ້ ແລະ ຄວາມຈົນເພື່ອສູ້ ຄວາມຮູ້ຄືແຮງພັກດັນໃນຊີວິດ "},
				   {name:'Xourwang',lname:'UNKNOWN',img:'img/IMG-20181023-WA0016.jpg',age:"23",fb:"",saya:"ຄົນວ່າງໆ",caption:"ວ່າງ ວ່າງ ວ່າງ"},
				   {name:'Chang',lname:'YANG',img:'img/IMG-20181023-WA0017.jpg',age:"22",fb:"Nrau Hmong",saya:"ຍິ້ມບາດໃຈ",caption:"Think it do it ok"},
				   {name:'Chanlor',lname:'HL',img:'img/IMG-20181023-WA0018.jpg',age:"22",fb:"Chan HL",saya:"ຕະກູນຫຼໍ່",caption:"ບໍ່ເວົ້າຫຼາຍເຈັບຄໍ"},
				 {name:'Thida',lname:'VONGKHAMHEUANG',img:'img/44758231_2291813904166117_1272304316782215168_n.jpg',age:"20",fb:"paopao vongkhamheuang",saya:"ໝູພີ ໝີພູ",caption:"ສາວຄູ ມູລະກາມິ"},
				 {name:'Meemi',lname:'PHUANGPHET',img:'img/44831598_182878232629515_2655066246000672768_n.jpg',age:"20",fb:"Meemi Phuangphet",saya:"ໃຜກະເອີ້ນອີ່ເຈີ້ຍ",caption:"ຄົນງາມບໍ່ຈຳເປັນຕ້ອງຂາວ"},
				 {name:'Onchan',lname:'LUANGBOUNMA',img:'img/44788967_265022477486763_5158993112546148352_n.jpg',age:"20",fb:"Em onnie lbm",saya:"ຜູ້ສາວຂາເລາະ",caption:"ເປັນຄົນໃສໆ ໄສຜູ້ບ່າວວວວ"},
				 {name:'Souliya',lname:'SISAVA',img:'img/43674849_185305532345495_7675288643090513920_n.jpg',age:"21",fb:"",saya:"ໂອຊິ BNK",caption:"ຊອມເບິ່ງຢູ່ເດີ..."},
				 {name:'Silinthone',lname:'OUDOM',img:'img/xxx.jpg',age:"20",fb:"silinthone oudom",saya:"ຊື່ ປຸກກີ້",caption:"ຄົນງາມບໍ່ຈຳເປັນຕ້ອງຫຸ່ນດີ	"},
				   ];
// console.log(data[idx_name].name);
	var img = "<img id=\"icon_modals\" src="+data[idx_name].img+"><br>";
	var name = data[idx_name].name +" "+ data[idx_name].lname ;
	var age = data[idx_name].age;
	var fb = data[idx_name].fb;
	var saya = data[idx_name].saya;
	var caption = data[idx_name].caption;
	document.getElementById("modals_span1").innerHTML = img;
	document.getElementById("modals_span2").innerHTML = name;
	document.getElementById("modals_age").innerHTML = age;
	document.getElementById("modals_fb").innerHTML =fb;
	document.getElementById("modals_saya").innerHTML =saya;
	document.getElementById("modals_caption").innerHTML =caption;

}