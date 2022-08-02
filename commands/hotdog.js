const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
var Scraper = require('images-scraper')



module.exports = {
    data: new SlashCommandBuilder()
    .setName('hotdog')
    .setDescription('gives yourself or another user a hotdog!')
    .addUserOption(option => option.setName('target').setDescription('Who are you going to send a hotdog to?').setRequired(false)),
    async execute(interaction){
        let member = interaction.user
        let mentionedMember = interaction.options.getUser('target')
        

    
        const randomImgs = [
'https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg',
'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png',
'https://www.thespruceeats.com/thmb/0IFzAV9ZH4QuuauCKghMzjCWeRQ=/2667x2000/smart/filters:no_upscale()/homemade-hot-dogs-1808491-final-01-ddf78878cb784ccdb617a2ae31674b75.jpg',
'https://leitesculinaria.com/wp-content/uploads/2021/05/perfect-hot-dog.jpg',
'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_27/1586836/hotdogs-te-square-200702.jpg',
'https://potatorolls.com/wp-content/uploads/2020/10/Basic-Hot-Dogs-1024x732.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Germanvegetariansausage.jpg/1200px-Germanvegetariansausage.jpg',
'https://media.istockphoto.com/vectors/hot-dog-isolated-icon-on-white-background-vector-id1271679742?k=20&m=1271679742&s=612x612&w=0&h=MVPdKmEZ61aU2tQzdeQ5fO_BYWfoQEzF0_51XGrnZv4=',
'https://www.foodrepublic.com/wp-content/uploads/2017/05/hotdog.jpg',
'https://assets.epicurious.com/photos/5cfea9780fb62aae4d2bec74/4:3/w_7599,h_5699,c_limit/ArgentineHotDog_HERO_060619_2179.jpg',
'https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg',
'https://businessmirror.com.ph/wp-content/uploads/2021/05/top03-053121.jpg',
'https://i0.wp.com/www.foodlovinfamily.com/wp-content/uploads/2020/07/how-to-boil-a-hotdog-square.jpg',
'https://www.thespruceeats.com/thmb/Nc2roodnAZBPYwNv1VUi2XD_RFg=/1333x1000/smart/filters:no_upscale()/new-york-hot-dogs-recipe-333560-hero-01-6be391df91774698aa490a45cd4f29c1.jpg',
'https://www.thespruceeats.com/thmb/PpmfZSFdbbobp26oDw8cPCqjIRM=/1264x1264/smart/filters:no_upscale()/air-fryer-hot-dogs-4802499-07-b327e219937c429a81efaf61519724a5.jpg',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hotdog-royalty-free-image-185123377-1562609410.jpg?crop=0.669xw:1.00xh;0.306xw,0&resize=640:*',
'https://www.quiktrip.com/app/uploads/2021/10/MicrosoftTeams-image-5.jpg',
'https://images.immediate.co.uk/production/volatile/sites/30/2021/07/NYC-style-hot-dogs-with-street-cart-onions-b473660.jpg',
'https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/06/08/0/FNM_070120-Grilled-Hot-Dogs_s4x3.jpg.rend.hgtvcom.616.462.suffix/1591625198177.jpeg',
'https://www.siftandsimmer.com/wp-content/uploads/2021/05/bakery-style-hot-dog-buns3.jpg',
'https://www.simplyrecipes.com/thmb/XpV83BHSKNI7oOyb7V9KlA8mGU4=/4480x6720/filters:fill(auto,1)/Simply-Recipes-Chicago-Dogs-LEAD-11-2cba639c3f914180bbb42997b5b4536d.jpg',
'https://images.immediate.co.uk/production/volatile/sites/2/2016/07/24724.jpg',
'https://images.ctfassets.net/cnu0m8re1exe/14P0p9iqmPVxMGD5IOujae/54eeebb6d5015c7243188e8d9e44605c/shutterstock_324250499.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
'https://www.asouthernsoul.com/wp-content/uploads/2021/05/air-fryer-hot-dogs-500x500.jpg',
'https://assets.speedway.com/images/FoodAndBeverage/InStoreItems//Grill_Jumbo-Hot-Dog.jpg',
'https://www.simplyrecipes.com/thmb/pbEw0BqNmBoJm5LpXjv2R5gMHvk=/1200x800/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__EYF-Baked-Cheesy-Hot-METHOD-2-86f5b582b38d4d6f881e6e64b1553021.jpg',
'https://www.foodsafetynews.com/files/2022/06/hotdogd.jpg',
'https://www.wikihow.com/images/thumb/0/09/Boil-a-Hot-Dog-Step-13-Version-3.jpg/aid131097-v4-1200px-Boil-a-Hot-Dog-Step-13-Version-3.jpg',
'https://takestwoeggs.com/wp-content/uploads/2021/06/Japanese-Hotdog-Japadog-Takestwoeggs-Feature.jpg',
'https://www.smokedbbqsource.com/wp-content/uploads/2021/08/Smoked-Homemade-Hotdogs.jpg',
'https://www.eatthis.com/wp-content/uploads/sites/4/2021/12/hot-dogs.jpg?quality=82&strip=1',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210326-blt-hotdog-02-landscape-jg-1622060198.jpg?crop=0.825xw:0.742xh;0.0459xw,0.128xh&resize=640:*',
'https://static.toiimg.com/thumb/75690366.cms?width=1200&height=900',
'https://parade.com/.image/t_share/MTkwNTgwOTY4NDk1Nzg1MDg1/bacon-wrapped-hotdog-ftr.jpg',
'https://static.wixstatic.com/media/38bce6_1fc3505b202b45e988eafa1e9a3309da~mv2.jpg/v1/fill/w_640,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/38bce6_1fc3505b202b45e988eafa1e9a3309da~mv2.jpg',
'https://popmenucloud.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/yrilzftb/c7371584-63b0-40bc-9b50-14e961d033a4.JPG',
'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063764719510',
'https://www.schaer.com/sites/default/files/styles/portrait_sm/public/HeaderProducts_HotDogRolls.jpg?itok=axdOLgVY',
'https://nationaltoday.com/wp-content/uploads/2020/07/Hot-Dog.jpg',
'https://pinoyfoodguide.com/wp-content/uploads/2021/03/Pinoy-Stir-Fried-Hotdog-1.jpg',
'https://awrestaurants.com/sites/default/files/cheeseconey.png',
'https://tribune.net.ph/wp-content/uploads/2019/06/HOTDOG.jpg',
'https://takestwoeggs.com/wp-content/uploads/2021/06/Japanese-Hotdog-Japadog-Takestwoeggs-Final-1.jpg',
'https://images.squarespace-cdn.com/content/v1/571a462b555986d7085b324d/1524000190522-WCZQ4QE11XFL10UUWLWA/PHOTO-11.jpg',
'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-600x300,f_auto,q_auto:best/newscms/2017_41/1288823/giada-hot-dog-today-tease-171013.jpg',
'https://imgix.bustle.com/uploads/shutterstock/2019/9/3/a6072f67-fda9-4a77-b695-b202dee10856-shutterstock-1150544471.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
'https://static4.depositphotos.com/1016418/315/i/600/depositphotos_3156699-stock-photo-hot-dog.jpg',
'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/new-mexico-urban-hotdog-company.jpg',
'https://uploads-ssl.webflow.com/611d4fed40d47350944980e1/611f136dd737fcd483948b6c_DSC08299.jpg',
'https://media-cdn.tripadvisor.com/media/photo-s/13/d1/a2/3a/johns-hotdog-deli.jpg',
'https://static.wixstatic.com/media/a9cc0d_ef723ae6580341839933f8044ca1402e~mv2.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/a9cc0d_ef723ae6580341839933f8044ca1402e~mv2.jpg',
'https://popmenucloud.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ydzpfmob/384e7b08-180d-4704-a959-4e23265d481d.jpg',
'https://www.hot-dog.org/sites/default/files/pictures/MLB/Decontsructed_Hot_Dog_Infographic600.jpg',
'https://www.colemannatural.com/wp-content/uploads/2021/05/three-hot-dogs-on-table-700x525.jpg',
'https://m.media-amazon.com/images/I/81R5KgfyLLL._AC_SL1500_.jpg',
'https://images.unsplash.com/photo-1621858170710-2cadd3066b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
'https://www.rd.com/wp-content/uploads/2019/04/el-guero-canelo-hot-dogs-e1651256561768.jpg?fit=700,466',
'https://www.snakeriverfarms.com/media/catalog/product/cache/fd3fd1671f3c67a963e2bd1c16b24bf4/6/5/65020_srf_american_wagu_hot_dogs_loose_1lb_crop.jpg',
'https://ik.imagekit.io/smithfield/nathans-famous/7a9cec6a-38b8-00ad-2f1c-269f0461d7dc/ac1a417d-40de-4fb1-a146-5b54f452941c/Nathans_BlogHeader_1168x394.jpg?tr=w-720,h-508,c-maintain_ratio,f-auto',
'https://www.tasteofhome.com/wp-content/uploads/2019/06/Steves-Hot-Dogs-St.-Louis.jpg?fit=700,700',
'https://purewows3.imgix.net/images/articles/2021_05/best-hot-dog-brands_chicago-beef-franks.jpg?auto=format,compress&cs=strip',
'https://i0.wp.com/sahlen.com/wp-content/uploads/2019/10/Sahlens-HotDogs.jpg?fit=2000%2C758&ssl=1',
'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/645536-danishtourism-danish-hot-dog-maria-nielsen-eb8563ea93bd7cadffe3c6aa1c38e1eb.jpg',
'https://i0.wp.com/tarasmulticulturaltable.com/wp-content/uploads/2019/10/Copenhagen-April-8-53-of-55.jpg?resize=686%2C915&ssl=1',
'https://i.insider.com/62bf52ddada84d0019b7d435?width=600&format=jpeg&auto=webp',
'https://cdn.britannica.com/79/186979-138-B09A9F57/researchers-olive-oil-hot-dogs.jpg?w=800&h=450&c=crop',
'https://www.wikihow.com/images/thumb/a/a9/Boil-a-Hot-Dog-Intro.jpg/-crop-375-300-375px-nowatermark-Boil-a-Hot-Dog-Intro.jpg',
'https://www.ketofocus.com/wp-content/uploads/keto-hot-dog-buns-5.jpg',
'https://d1tjtj7oa1d196.cloudfront.net/filters:strip_exif()/filters:strip_icc()/filters:format(jpeg)/filters:background_color(f2ecdf)/filters:quality(60)/fit-in/800x0/2022/07/14/14/31/44/47d98250-e222-4f58-8af5-830a0f6e1dd7/natural_stadium_hot_dog_planogram_straight_on_back_shot.png',
'https://www.catalysthotdogs.com/wp-content/img/i4.png',
'https://i.ytimg.com/vi/6i0YWyJm7DM/maxresdefault.jpg',
'https://www.frugalmomeh.com/wp-content/uploads/2014/07/IMG_7248-1024x682.jpg.webp',
'https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/qnhpazjv/ceac0629-5566-47bf-8ce8-a05a27282d0c.jpg',
'http://cdn.shopify.com/s/files/1/1158/1404/products/icelandic_hotdog_1200x1200.jpg?v=1589469375',
'https://www.hot-dog.org/themes/bootstrap/hotdog/images/regional-hot-dog-Philadelphia.jpg',
'https://us.123rf.com/450wm/liudmylachuhunova/liudmylachuhunova1909/liudmylachuhunova190900439/130419812-homemade-colombian-hot-dogs-with-pineapple-sauce-yellow-mustard-and-mayo-ketchup-on-a-rustic-wooden-.jpg?ver=6',
'https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ydzpfmob/6e2b46c9-3db9-41c0-ad6f-3a9d8ad0e53a.jpg',
'https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt71f97e8434e50d47/60942c8ef6a831100b5e0233/Big_Bite_1800X1800_transparent.png',
'https://hotdogonastick.com/wp-content/uploads/2016/04/HDOS_Menu_hotdogonastick_lg.jpg',
'https://media.timeout.com/images/100119693/750/562/image.jpg',
'https://st.depositphotos.com/1419868/1289/i/600/depositphotos_12890506-stock-photo-hot-dog.jpg',
'https://umaihotdogs.com/wp-content/uploads/2021/05/Umai-Savory-Hot-Dogs-01.jpg',
'https://thumbs.dreamstime.com/b/vector-hotdog-mustard-cartoon-style-fast-food-hotdog-poster-menu-vector-hotdog-mustard-cartoon-style-fast-food-211299267.jpg',
'https://img.freepik.com/free-vector/hotdog-with-happy-face_1308-104858.jpg?w=2000',
'https://c8.alamy.com/comp/EM83J2/hot-dog-cartoon-thumbs-up-EM83J2.jpg',
'https://ichef.bbci.co.uk/news/976/cpsprodpb/CF69/production/_91979035_hi022450824.jpg',
'https://media.istockphoto.com/photos/snacks-hotdog-isolated-on-white-background-picture-id1327617485?b=1&k=20&m=1327617485&s=170667a&w=0&h=19BYyPQlVFtQHLEGoUP6m410l13j3FKSgZwsHP1FOGI=',
'https://geweb.azureedge.net/-/media/Images/Giant-Eagle/shop/Meat-Seafood/grilling-hotdogs/08-Hot-Dog-Buns.ashx',
'https://i0.wp.com/www.aboutfilipinofood.com/wp-content/uploads/purefoods_tender_juicy_hotdog.jpg?resize=500%2C588&ssl=1',
'https://m.media-amazon.com/images/I/51TofFosJdL._AC_.jpg',
'https://thecheekychickpea.com/wp-content/uploads/2021/08/vegan-hot-dogs-6-512x1024.png',
'https://images-vod.wixmp.com/a9cc0d88-7a5c-4298-baa5-f18478ccdca4/images/cea8a1a8db324e58b32936e9f33b6badf001/v1/fill/w_330,h_330,q_85,usm_0.66_1.00_0.01/file.jpg',
'https://www.ballparkbrand.com/sites/default/files/Fry-Dog.png',
'https://qph.cf2.quoracdn.net/main-qimg-9c57aa484f4fc8f38dc4f69cbf5f20bc-lq',
'https://www.thebbqbastard.com/wp-content/uploads/2020/08/American-Hot-Dogs-1-van-1-2.jpg',
'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=1600&h=800&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F07%2Fdanish-hot-dog-international-hot-dogs-FT-BLOG0717.jpg',
'https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Hot-Dogs-With-Assorted-Toppings-800x530.png',
'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_400/v1/media/gmg/2V2B3U2CJBGSVOCQB25DZV2JHI.jpg?_a=ATAK9AA0',
'https://static.wixstatic.com/media/7cf8c9_5b9ea32c297f49fa8d9764fc356993d2~mv2.jpg/v1/fill/w_640,h_818,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7cf8c9_5b9ea32c297f49fa8d9764fc356993d2~mv2.jpg',
'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=750&h=375&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd38%2Fchicago-dog-madhungry002-0711mld107324%2Fchicago-dog-madhungry002-0711mld107324_horiz.jpg%3Fitok%3DrfbSL7CV',
'https://image.shutterstock.com/image-photo/hotdog-big-sausage-fresh-tomato-260nw-301707353.jpg',
'https://www.rd.com/wp-content/uploads/2021/07/hot-dogs-QT-1200x800-GettyImages-157568906.jpg',
'https://5.imimg.com/data5/SELLER/Default/2021/5/LE/TB/VG/6361155/hot-dog-500x500.jpg',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indextemplate-hotdog-1526675038.jpg?crop=0.502xw:1.00xh;0.106xw,0&resize=640:*',
'https://www.tedshotdogs.com/cache/images/fab856a922bd6ae9bc1996d100eb5676.png',
'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-hotdogs-8b06cb8.jpg?quality=90&resize=504,458?quality=90&resize=504,458',
'https://nypost.com/wp-content/uploads/sites/2/2021/08/joey-chestnut-1.jpg?quality=75&strip=all&w=744',
'https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1462220023835394708/products/Dogs-Uber-Tasty-Hot-Dog-2020.jpg&height=300&width=300',
'https://izzycooking.com/wp-content/uploads/2021/11/Tex-Mex-Hot-Dogs-683x1024.jpeg',
'https://images.squarespace-cdn.com/content/v1/53138e5de4b0fed2ed869a45/1590699392835-SQGCM9OX6GAHN8M8IR6S/_S7A2863.JPG?format=1000w',
'https://i.insider.com/526ae6bdeab8ea016d99f6f3?width=700',
'https://culinaryginger.com/wp-content/uploads/Mexican-Style-Hot-Dogs-picture-1--660x990.jpg',
'https://i.ytimg.com/vi/TSoT0qGT2-o/maxresdefault.jpg',
'https://1bqu1qjqw3y3g50yf4cszxnd-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Mexican-Street-Corn-Hot-Dogs_03-300x300.jpg',
'https://www.gannett-cdn.com/presto/2021/07/04/USAT/7ce048f2-6a0a-4910-b256-d80779d2f148-MicrosoftTeams-image_5.png?crop=4930,2773,x0,y514&width=3200&height=1800&format=pjpg&auto=webp',
'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_768/v1/img/recipes/44/55/01/picLTgJWP.jpg',
'https://i0.wp.com/sahlen.com/wp-content/uploads/2021/02/DSC03365.jpg?resize=300%2C300&ssl=1',
'https://assets3.thrillist.com/v1/image/2771696/828x1500/flatten;scale;webp=auto;jpeg_quality=60.jpg',
'https://media.gettyimages.com/photos/hot-dog-isolated-picture-id1198026617?s=612x612',
'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIiq_TK7FvSk/v1/1200x-1.jpg',
'https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_thescene.jpg%2Cfl_progressive%2Cg_center%2Ch_705%2Cq_80%2Cw_705/v1503420193/cntraveler_icelandic-lamb-hot-dog-iceland-food-cuisine.jpg',
'https://thumbor.thedailymeal.com/fXCeDCtpBv7rns3N4xsDMPeKwk0=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/1863781/2291393/31_New_Mexico_Yelp_edit.jpg',
'https://sa.kapamilya.com/absnews/abscbnnews/media/2019/life/10/25/20191015-hotdog.jpg',
'https://img.freepik.com/free-photo/hotdog-with-ketchup-mustard-lettuce-wooden-table_2829-19844.jpg?w=2000',
'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1009840712710305&get_thumbnail=1',
'https://c4.wallpaperflare.com/wallpaper/794/306/483/sausage-fast-food-buns-fast-food-wallpaper-preview.jpg',
'https://i.cbc.ca/1.1518460.1379037962!/httpImage/image.jpg_gen/derivatives/16x9_780/li-hotdog.jpg',
'https://i.insider.com/62bf5304ada84d0019b7d44f?width=1000&format=jpeg&auto=webp',
'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ydzpfmob/2db3833a-22cc-4696-a38f-0fd4d9a5d23b.jpg',
'https://static01.nyt.com/images/2022/07/27/dining/27Chicagodogrex/05Chicagodogrex-articleLarge.jpg',
'https://dictionary.cambridge.org/us/images/thumb/frankf_noun_002_14868.jpg?version=5.0.247',
'https://assets.bonappetit.com/photos/57bf26054395c0582bb62ec7/1:1/w_2560%2Cc_limit/bacon-wrapped-hot-dog-instagram.jpg',
'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps20159_FF1227370D22.jpg',
'https://www.spendwithpennies.com/wp-content/uploads/2019/08/Hot-Dog-Chilli-Sauce1-SpendWithPennies-4.jpg',
'https://umaihotdogs.com/wp-content/uploads/2021/05/Umai-Savory-Hot-Dogs-03.jpg',
'https://images.themodernproper.com/billowy-turkey/production/posts/2017/Hot-Dog-Toppings-01.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1619720533&s=bc71bc5a38b04e35bf48fab42a1dc7b4',
'https://www.wikihow.com/images/thumb/f/ff/Cook-Hot-Dogs-Step-13-Version-5.jpg/v4-460px-Cook-Hot-Dogs-Step-13-Version-5.jpg',
'https://www.plainchicken.com/wp-content/uploads/2011/07/best-grilled-hot-dogs-2-500x500.jpg',
'https://images2.minutemediacdn.com/image/upload/c_crop,w_2253,h_1267,x_0,y_66/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g1p4ry0pqpaabp7mxt.jpg',
'https://www.klostermanbakery.com/uploads/images/products/3700_3702_PACK_4.75in_HD_Bun_900px_Rev.jpg',
'https://www.frugalmomeh.com/wp-content/uploads/2014/07/IMG_7259-1024x682.jpg.webp',
'https://www.al.com/resizer/2whM7-9k_TjTS5IkDFYuSvZ1Qqw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/DYYBRCFCC5HX5CHNJEUYSBZGOY.JPG',
'https://i0.wp.com/tarasmulticulturaltable.com/wp-content/uploads/2019/10/Ristet-Hotdog1.jpg?resize=720%2C616&ssl=1',
'https://foodal.com/wp-content/uploads/2016/06/nacho-hot-dog.jpg',
'https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_cntraveler.png,fl_progressive,g_face,h_450,q_80,w_800/v1503420193/cntraveler_icelandic-lamb-hot-dog-iceland-food-cuisine.jpg',
'https://www.colemannatural.com/wp-content/uploads/2021/05/hot-dogs-on-grill-700x700.jpg',
'https://www.brit.co/media-library/image.jpg?id=21476736&width=764&quality=80',
'https://ik.imagekit.io/smithfield/nathans-famous/tr:w-416px,h-416px,f-auto/https://curator-assets.b-cdn.net/79dc0702-449f-4879-b9cc-d57f0c1d8876/267146333.jpg?width=416&quality=75',
'https://www.catalysthotdogs.com/wp-content/uploads/2022/03/story-new-2.png',
                    ]
        const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
        const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
        const randomImg = randomImgs[Math.floor(Math.random() * randomImgs.length)];
        const embed = new EmbedBuilder()
        .setTitle('Hotdog...')
        .setDescription('You got a hotdog!')
        .setImage(randomImg)
        .setColor(randomSideColor)

        const diffEmbed = new EmbedBuilder()
        .setTitle('Hotdog...')
        .setDescription(`${member} sent ${mentionedMember} a hotdog!`)
        .setImage(randomImg)
        .setColor(randomSideColor)
        
        if(mentionedMember){
            await interaction.reply({embeds: [diffEmbed]})
           } else {await interaction.reply({embeds: [embed]})} 
    }
}

