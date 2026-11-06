// Urdu (Pakistan) localization for all Mathematics questions in Classes 3, 4 and 5.
(function(){
 const data=window.QUESTIONS_DATA||{};
 const topicNames={
 3:{
 "Two digits addition with carry":"دو ہندسوں کی جمع (حاصل کے ساتھ)",
 "Statement questions of addition, subtraction and multiplication":"جمع، تفریق اور ضرب کے لفظی سوالات",
 "Unitary method":"اکائی کا طریقہ",
 "Fraction (Proper, improper, numerator, denominator)":"کسر: صحیح و غیر صحیح، شمار کنندہ اور مخرج",
 "Capacity Units":"گنجائش کی اکائیاں"
 },
 4:{
 "Decimal question (+,-,÷,×)":"اعشاری اعداد کی جمع، تفریق، ضرب اور تقسیم",
 "Conversion: Week to days; Liter to milliliters; Kg to g etc.":"اکائیوں کی تبدیلی",
 "Measurements":"پیمائش",
 "Factorization":"عوامل معلوم کرنا",
 "Prime number, composite numbers identification":"اولی اور مرکب اعداد کی پہچان",
 "Identification values from graph":"گراف سے معلومات پڑھنا",
 "Four digits addition with carry and subtraction from borrow":"چار ہندسوں کی جمع اور ادھار کے ساتھ تفریق",
 "Time":"وقت",
 "Recognize number from words i.e. Eighty-four thousand fifty-six":"الفاظ سے اعداد لکھنا"
 },
 5:{
 "Conversion":"اکائیوں کی تبدیلی","Fraction":"کسر","Percentage":"فیصد",
 "multiplication two digits with two digits":"دو ہندسوں کی دو ہندسوں سے ضرب",
 "Fraction simplification of fractions":"کسروں کو سادہ کرنا",
 "Decimal operation i.e. multiplication, division":"اعشاری اعداد کی ضرب اور تقسیم",
 "Geometry":"ہندسہ"
 }};
 const words={
 "Kilogram":"کلوگرام","Metre":"میٹر","Litre":"لیٹر","Minute":"منٹ","Gram":"گرام","Centimetre":"سینٹی میٹر","Second":"سیکنڈ","Hour":"گھنٹہ","Clock":"گھڑی","Ruler":"پیمانہ","Scale for weight":"ترازو","Cup":"کپ","Jug":"جگ","Thermometer":"تھرمامیٹر","Kilometre":"کلومیٹر","Millimetre":"ملی میٹر","Millilitre":"ملی لیٹر","Yes":"جی ہاں","No":"نہیں","Both":"دونوں","None":"کوئی نہیں","Prime":"اولی عدد","Composite":"مرکب عدد","Neither prime nor composite":"نہ اولی نہ مرکب","Even prime":"جفت اولی عدد","Monday":"پیر","Tuesday":"منگل","Bar graph":"بار گراف","Map":"نقشہ","Calendar":"کیلنڈر","Short hand":"چھوٹی سوئی","Long hand":"لمبی سوئی","Acute":"حادہ زاویہ","Right":"قائمہ زاویہ","Obtuse":"منفرجہ زاویہ","Straight":"سیدھا زاویہ","Triangle":"مثلث","Square":"مربع","Circle":"دائرہ","Oval":"بیضوی شکل","Half":"آدھا","Quarter":"چوتھائی","One quarter":"ایک چوتھائی","Three quarters":"تین چوتھائی","Whole":"پورا","One whole":"ایک مکمل","One tenth":"دسواں حصہ","Double":"دوگنا","Greater than denominator":"مخرج سے بڑا","Equal to denominator":"مخرج کے برابر","Smaller than denominator":"مخرج سے چھوٹا","Always zero":"ہمیشہ صفر","Numerator":"شمار کنندہ","Denominator":"مخرج","Whole number":"پورا عدد","Remainder":"باقی","are equal":"برابر ہیں","Cannot measure":"ناپنا ممکن نہیں","cup":"کپ","cups":"کپ","kg":"کلوگرام","g":"گرام","cotton":"روئی","rice":"چاول","Neither":"کوئی بھی نہیں","number":"عدد"}
 ;
 function urduQuestion(q,cls,topic){
  let x=String(q);
  if(cls===3){
   if(/^\d+ \+ \d+ = \?$/.test(x)) return "جمع کریں: "+x;
   if(x.includes("pencils")||x.includes("birds")||x.includes("apples")||x.includes("rupees")||x.includes("balloons")||x.includes("oranges")||x.includes("passengers")||x.includes("biscuits")){
    const map=[
    [/Ali has (\d+) pencils\. His friend gives him (\d+) more\. How many pencils does Ali have now\?/,"علی کے پاس $1 پنسلیں ہیں۔ اس کے دوست نے اسے مزید $2 پنسلیں دیں۔ اب علی کے پاس کل کتنی پنسلیں ہیں؟"],
    [/There are (\d+) birds in a tree\. (\d+) fly away\. How many birds are left\?/,"درخت پر $1 پرندے بیٹھے ہیں۔ ان میں سے $2 اُڑ گئے۔ اب کتنے پرندے باقی ہیں؟"],
    [/A box has (\d+) rows of apples with (\d+) apples in each row\. How many apples are there\?/,"ایک ڈبے میں سیبوں کی $1 قطاریں ہیں اور ہر قطار میں $2 سیب ہیں۔ کل کتنے سیب ہیں؟"],
    [/Sara has (\d+) rupees and spends (\d+) rupees\. How much money is left\?/,"سارہ کے پاس $1 روپے ہیں۔ وہ $2 روپے خرچ کر دیتی ہے۔ اس کے پاس کتنے روپے بچیں گے؟"],
    [/A shopkeeper has (\d+) red balloons and (\d+) blue balloons\. How many balloons are there altogether\?/,"ایک دکاندار کے پاس $1 سرخ اور $2 نیلے غبارے ہیں۔ کل کتنے غبارے ہیں؟"],
    [/There are (\d+) bags\. Each bag has (\d+) oranges\. How many oranges are there\?/,"$1 تھیلے ہیں۔ ہر تھیلے میں $2 مالٹے ہیں۔ کل کتنے مالٹے ہیں؟"],
    [/A bus has (\d+) passengers\. (\d+) get off\. How many passengers remain\?/,"ایک بس میں $1 مسافر ہیں۔ $2 مسافر اتر گئے۔ اب کتنے مسافر باقی ہیں؟"],
    [/One packet has (\d+) biscuits\. How many biscuits are in (\d+) packets\?/,"ایک پیکٹ میں $1 بسکٹ ہیں۔ $2 پیکٹوں میں کتنے بسکٹ ہوں گے؟"]];
    for(const [re,t] of map) if(re.test(x)) return x.replace(re,t);
   }
   if(/cost of 1 pencil|notebook costs|apple costs|worker earns|packet contains|toy costs|bottle holds|ribbon costs/i.test(x)){
    const map=[[/The cost of 1 pencil is (\d+) rupees\. What is the cost of (\d+) pencils\?/,"ایک پنسل کی قیمت $1 روپے ہے۔ $2 پنسلوں کی قیمت کتنی ہوگی؟"],[/One notebook costs (\d+) rupees\. How much do (\d+) notebooks cost\?/,"ایک کاپی کی قیمت $1 روپے ہے۔ $2 کاپیوں کی قیمت کتنی ہوگی؟"],[/One apple costs (\d+) rupees\. What is the cost of (\d+) apples\?/,"ایک سیب کی قیمت $1 روپے ہے۔ $2 سیبوں کی قیمت کتنی ہوگی؟"],[/A worker earns (\d+) rupees in one day\. How much does he earn in (\d+) days\?/,"ایک مزدور ایک دن میں $1 روپے کماتا ہے۔ وہ $2 دنوں میں کتنے روپے کمائے گا؟"],[/One packet contains (\d+) crayons\. How many crayons are in (\d+) packets\?/,"ایک پیکٹ میں $1 رنگین پنسلیں ہیں۔ $2 پیکٹوں میں کتنی پنسلیں ہوں گی؟"],[/If 1 toy costs (\d+) rupees, what is the cost of (\d+) toys\?/,"اگر ایک کھلونے کی قیمت $1 روپے ہے تو $2 کھلونوں کی قیمت کتنی ہوگی؟"],[/One bottle holds (\d+) litres of water\. How much water do (\d+) bottles hold\?/,"ایک بوتل میں $1 لیٹر پانی آتا ہے۔ ایسی $2 بوتلوں میں کتنا پانی ہوگا؟"],[/If 1 metre of ribbon costs (\d+) rupees, what is the cost of (\d+) metres\?/,"اگر ایک میٹر فیتے کی قیمت $1 روپے ہے تو $2 میٹر کی قیمت کتنی ہوگی؟"]];
    for(const [re,t] of map) if(re.test(x)) return x.replace(re,t);
   }
   if(x.includes("fraction")||x.includes("numerator")||x.includes("denominator")||x.includes("pizza")||x.includes("proper fraction")){ const exact={"In the fraction 3/5, which number is the numerator?":"کسر 3/5 میں شمار کنندہ کون سا ہے؟","In the fraction 2/7, which number is the denominator?":"کسر 2/7 میں مخرج کون سا ہے؟","Which of these is a proper fraction?":"ان میں سے صحیح کسر کون سی ہے؟","Which of these is an improper fraction?":"ان میں سے غیر صحیح کسر کون سی ہے؟","A pizza is divided into 4 equal parts. 1 part is eaten. What fraction is eaten?":"ایک پیزا کے 4 برابر حصے کیے گئے۔ 1 حصہ کھا لیا گیا۔ کتنا حصہ کھایا گیا؟","Which fraction means three out of eight equal parts?":"کون سی کسر آٹھ برابر حصوں میں سے تین حصوں کو ظاہر کرتی ہے؟","A proper fraction has a numerator that is:":"صحیح کسر میں شمار کنندہ مخرج سے چھوٹا ہوتا ہے:","In 6/9, what does 9 show?":"6/9 میں 9 کیا ظاہر کرتا ہے؟"}; return exact[x]||x.replace("In the fraction ","کسر ").replace("which number is the numerator?","میں شمار کنندہ کون سا ہے؟").replace("which number is the denominator?","میں مخرج کون سا ہے؟"); }
   if(x==="In 6/9, what does 9 show?") return "6/9 میں 9 کیا ظاہر کرتا ہے؟";
   if(/litre|millilitre|capacity|jug|bottle|quantity|unit is smaller|more:/.test(x)) return x.replace("Which unit is commonly used to measure the capacity of a water bottle?","پانی کی بوتل کی گنجائش ناپنے کے لیے کون سی اکائی استعمال ہوتی ہے؟").replace("1 litre is equal to how many millilitres?","1 لیٹر میں کتنے ملی لیٹر ہوتے ہیں؟").replace("Which is more: 2 litres or 1 litre?","زیادہ مقدار کون سی ہے: 2 لیٹر یا 1 لیٹر؟").replace("A jug contains 500 mL of juice. How much juice is in 2 such jugs?","ایک جگ میں 500 ملی لیٹر جوس ہے۔ ایسے 2 جگوں میں کتنا جوس ہوگا؟").replace("Which unit is smaller?","چھوٹی اکائی کون سی ہے؟").replace("A bottle has a capacity of 1 litre. How many 500 mL cups can fill it?","ایک بوتل کی گنجائش 1 لیٹر ہے۔ اسے 500 ملی لیٹر کے کتنے کپ بھر سکتے ہیں؟").replace("Which quantity is the greatest?","سب سے زیادہ مقدار کون سی ہے؟").replace("Half a litre is equal to:","آدھا لیٹر کتنے کے برابر ہے؟");
  }
  if(cls===4){
   if(/^[\d.]+ [＋+\-×÷] [\d.]+ = \?$/.test(x)) return "حل کریں: "+x;
   const simple=[
   [/1 week = how many days\?/,"1 ہفتے میں کتنے دن ہوتے ہیں؟"],[/2 weeks = how many days\?/,"2 ہفتوں میں کتنے دن ہوتے ہیں؟"],[/1 litre = how many millilitres\?/,"1 لیٹر میں کتنے ملی لیٹر ہوتے ہیں؟"],[/2 litres = how many millilitres\?/,"2 لیٹر میں کتنے ملی لیٹر ہوتے ہیں؟"],[/1 kilogram = how many grams\?/,"1 کلوگرام میں کتنے گرام ہوتے ہیں؟"],[/3 kilograms = how many grams\?/,"3 کلوگرام میں کتنے گرام ہوتے ہیں؟"],[/1 metre = how many centimetres\?/,"1 میٹر میں کتنے سینٹی میٹر ہوتے ہیں؟"],[/2 metres = how many centimetres\?/,"2 میٹر میں کتنے سینٹی میٹر ہوتے ہیں؟"],[/1 hour = how many minutes\?/,"1 گھنٹے میں کتنے منٹ ہوتے ہیں؟"],[/1 day = how many hours\?/,"1 دن میں کتنے گھنٹے ہوتے ہیں؟"],[/Which unit measures length\?/,"لمبائی ناپنے کے لیے کون سی اکائی استعمال ہوتی ہے؟"],[/Which unit measures weight\?/,"وزن ناپنے کے لیے کون سی اکائی استعمال ہوتی ہے؟"],[/Which unit measures liquid\?/,"مائع کی مقدار ناپنے کے لیے کون سی اکائی استعمال ہوتی ہے؟"],[/How many centimetres are in 1 metre\?/,"1 میٹر میں کتنے سینٹی میٹر ہوتے ہیں؟"],[/Which is longer\?/,"ان میں سے زیادہ لمبا کون سا ہے؟"],[/Which tool measures length\?/,"لمبائی ناپنے کے لیے کون سا آلہ استعمال ہوتا ہے؟"],[/What do we use to measure time\?/,"وقت ناپنے کے لیے ہم کیا استعمال کرتے ہیں؟"],[/Which is heavier\?/,"ان میں سے زیادہ بھاری کون سا ہے؟"],[/Which unit is suitable for measuring a pencil\?/,"پنسل کی لمبائی ناپنے کے لیے کون سی اکائی مناسب ہے؟"],[/Which unit is suitable for measuring a road\?/,"سڑک کی لمبائی ناپنے کے لیے کون سی اکائی مناسب ہے؟"]];
   for(const [re,t] of simple) if(re.test(x)) return t;
   if(x.startsWith("Factors of ")) return x.replace("Factors of ","").replace(" are:"," کے عوامل کون سے ہیں؟");
   if(x.startsWith("Which is a factor of ")) return x.replace("Which is a factor of ","").replace("?"," کا عامل کون سا ہے؟");
   if(x.startsWith("Which number is a factor of ")) return x.replace("Which number is a factor of ","").replace("?"," کا عامل کون سا ہے؟");
   if(x.includes("prime number")||x==="Which number has only two factors?"||x==="How many factors does 7 have?") return x.replace("Which is a prime number?","اولی عدد کون سا ہے؟").replace("Is 11 a prime number?","کیا 11 اولی عدد ہے؟").replace("Which number has only two factors?","کس عدد کے صرف دو عوامل ہوتے ہیں؟").replace("How many factors does 7 have?","7 کے کتنے عوامل ہوتے ہیں؟").replace("Which is the only even prime number?","واحد جفت اولی عدد کون سا ہے؟");
   if(x.includes("composite number")||x==="The number 1 is:") return x.replace("Which is a composite number?","مرکب عدد کون سا ہے؟").replace("The number 1 is:","عدد 1 کیا ہے؟");
   if(x==="If 1 picture means 5 students, 2 pictures mean:") return "اگر ایک تصویر 5 طلبہ کو ظاہر کرتی ہے تو 2 تصویریں کتنے طلبہ کو ظاہر کریں گی؟";
   if(x.includes("graph")||x.includes("chart")||x.includes("symbol")||x.includes("Values are")||x.includes("A graph shows")||x.includes("A chart shows")){
    return x.replace("In a bar graph, Monday = 5 and Tuesday = 8. Which day has more?","بار گراف میں پیر = 5 اور منگل = 8 ہے۔ کس دن کی تعداد زیادہ ہے؟").replace("A graph shows 4 apples and 7 oranges. How many fruits altogether?","گراف میں 4 سیب اور 7 مالٹے دکھائے گئے ہیں۔ کل کتنے پھل ہیں؟").replace("If one symbol represents 2 books, 3 symbols represent how many books?","اگر ایک نشان 2 کتابیں ظاہر کرتا ہے تو 3 نشان کتنی کتابیں ظاہر کریں گے؟").replace("A graph shows 10 boys and 6 girls. How many more boys?","گراف میں 10 لڑکے اور 6 لڑکیاں ہیں۔ لڑکے لڑکیوں سے کتنے زیادہ ہیں؟").replace("Which graph uses bars to show data?","اعداد و شمار دکھانے کے لیے کون سا گراف استعمال ہوتا ہے؟").replace("A chart shows 5, 7 and 3. What is the greatest value?","چارٹ میں 5، 7 اور 3 درج ہیں۔ سب سے بڑی قدر کون سی ہے؟").replace("A graph shows 4, 4 and 4. What is their total?","گراف میں 4، 4 اور 4 ہیں۔ ان کا مجموعہ کیا ہے؟").replace("If 1 picture means 5 students, 2 pictures mean:","اگر ایک تصویر 5 طلبہ ظاہر کرتی ہے تو 2 تصویریں کتنے طلبہ ظاہر کریں گی؟").replace("Values are 2, 6 and 9. What is the smallest?","قدریں 2، 6 اور 9 ہیں۔ سب سے چھوٹی قدر کون سی ہے؟").replace("A graph shows 8 red balls and 5 blue balls. Total balls?","گراف میں 8 سرخ اور 5 نیلی گیندیں ہیں۔ کل کتنی گیندیں ہیں؟");
   }
   if(/^[\\d.]+\\s*[+\\-×÷]\\s*[\\d.]+\\s*=\\s*\\?$/.test(x)) return "حل کریں: "+x;
   if(x.includes("minutes")||x.includes("hours")||x.includes("Quarter past")||x.includes("Half past")||x.includes("What time")||x.includes("days are in a week")||x.includes("months are in a year")||x.includes("hand shows minutes")){
    return x.replace("How many minutes are in one hour?","ایک گھنٹے میں کتنے منٹ ہوتے ہیں؟").replace("How many hours are in one day?","ایک دن میں کتنے گھنٹے ہوتے ہیں؟").replace("Quarter past 3 means:","سوا تین بجے کا مطلب کیا ہے؟").replace("Half past 6 means:","ساڑھے چھ بجے کا مطلب کیا ہے؟").replace("How many minutes are in half an hour?","آدھے گھنٹے میں کتنے منٹ ہوتے ہیں؟").replace("What time is 1 hour after 4:00?","4:00 بجے کے ایک گھنٹے بعد کیا وقت ہوگا؟").replace("What time is 30 minutes after 2:15?","2:15 کے 30 منٹ بعد کیا وقت ہوگا؟").replace("How many days are in a week?","ایک ہفتے میں کتنے دن ہوتے ہیں؟").replace("How many months are in a year?","ایک سال میں کتنے مہینے ہوتے ہیں؟").replace("Which hand shows minutes on a clock?","گھڑی کی کون سی سوئی منٹ ظاہر کرتی ہے؟");
   }
   if(/thousand|hundred|fifty|twenty|six thousand|ninety|forty|seventy|thirty|eight thousand|sixty-five/.test(x)){
    const m={"Eighty-four thousand fifty-six is:":"چوراسی ہزار چھپن کو ہندسوں میں لکھیں:","Twenty-three thousand four hundred is:":"تئیس ہزار چار سو کو ہندسوں میں لکھیں:","Fifty thousand and twenty is:":"پچاس ہزار بیس کو ہندسوں میں لکھیں:","Six thousand three hundred fifteen is:":"چھ ہزار تین سو پندرہ کو ہندسوں میں لکھیں:","Ninety thousand five is:":"نوے ہزار پانچ کو ہندسوں میں لکھیں:","Forty-two thousand seven hundred is:":"بیالیس ہزار سات سو کو ہندسوں میں لکھیں:","Seventy-one thousand thirty-two is:":"اکہتر ہزار بتیس کو ہندسوں میں لکھیں:","Thirty thousand eight hundred nine is:":"تیس ہزار آٹھ سو نو کو ہندسوں میں لکھیں:","Eight thousand forty is:":"آٹھ ہزار چالیس کو ہندسوں میں لکھیں:","Sixty-five thousand six hundred six is:":"پینسٹھ ہزار چھ سو چھ کو ہندسوں میں لکھیں:"};return m[x]||x;
   }
  }
  if(cls===5){
   if(/kilometre|centimetre|kilogram|grams|litre|millilitres|minutes|hours|week|days/.test(x)) return x.replace("1 kilometre = how many metres?","1 کلومیٹر میں کتنے میٹر ہوتے ہیں؟").replace("1 metre = how many centimetres?","1 میٹر میں کتنے سینٹی میٹر ہوتے ہیں؟").replace("1 kilogram = how many grams?","1 کلوگرام میں کتنے گرام ہوتے ہیں؟").replace("1 litre = how many millilitres?","1 لیٹر میں کتنے ملی لیٹر ہوتے ہیں؟").replace("1 hour = how many minutes?","1 گھنٹے میں کتنے منٹ ہوتے ہیں؟").replace("2 kilometres = how many metres?","2 کلومیٹر میں کتنے میٹر ہوتے ہیں؟").replace("3 kilograms = how many grams?","3 کلوگرام میں کتنے گرام ہوتے ہیں؟").replace("2 litres = how many millilitres?","2 لیٹر میں کتنے ملی لیٹر ہوتے ہیں؟").replace("1 day = how many hours?","1 دن میں کتنے گھنٹے ہوتے ہیں؟").replace("1 week = how many days?","1 ہفتے میں کتنے دن ہوتے ہیں؟");
   if(x.includes("numerator")) return x.replace("In 3/8, the numerator is:","3/8 میں شمار کنندہ کون سا ہے؟");
   if(x.includes("denominator")) return x.replace("In 5/9, the denominator is:","5/9 میں مخرج کون سا ہے؟");
   if(x==="Which is a proper fraction?") return "صحیح کسر کون سی ہے؟";
   if(x==="Which is an improper fraction?") return "غیر صحیح کسر کون سی ہے؟";
   if(x==="Which fraction is equal to one half?") return "کون سی کسر آدھے کے برابر ہے؟";
   if(x==="What is 1/4 + 1/4?") return "1/4 + 1/4 کا جواب کیا ہے؟";
   if(x==="What is 3/5 - 1/5?") return "3/5 - 1/5 کا جواب کیا ہے؟";
   if(x==="Which fraction is greater?") return "کون سی کسر بڑی ہے؟";
   if(x==="How many quarters make one whole?") return "ایک مکمل بنانے کے لیے کتنے چوتھائی حصے درکار ہیں؟";
   if(x==="Which fraction represents three out of four equal parts?") return "کون سی کسر چار برابر حصوں میں سے تین حصوں کو ظاہر کرتی ہے؟";
   if(x.endsWith(" means:")) return x.replace(" means:"," کا مطلب کیا ہے؟").replace("50%","50 فیصد").replace("25%","25 فیصد").replace("100%","100 فیصد");
   if(/% of/.test(x)) return x.replace("% of "," فیصد کا ").replace(" is:"," کیا ہے؟");
   if(x.includes("×")||x.includes("÷")) return "حل کریں: "+x;
   if(x.startsWith("Simplify ")) return x.replace("Simplify ","کسر کو سادہ کریں: ");
   if(x.includes("sides")||x.includes("angles")||x.includes("corners")||x.includes("vertices")||x.includes("shape")||x.includes("angle")){
    return x.replace("How many sides does a triangle have?","مثلث کے کتنے اضلاع ہوتے ہیں؟").replace("How many sides does a square have?","مربع کے کتنے اضلاع ہوتے ہیں؟").replace("How many sides does a pentagon have?","پنج ضلعی شکل کے کتنے اضلاع ہوتے ہیں؟").replace("How many sides does a hexagon have?","شش ضلعی شکل کے کتنے اضلاع ہوتے ہیں؟").replace("How many right angles does a rectangle have?","مستطیل میں کتنے قائمہ زاویے ہوتے ہیں؟").replace("A circle has how many corners?","دائرے کے کتنے کونے ہوتے ہیں؟").replace("What is the name of an angle of 90 degrees?","90 درجے کے زاویے کو کیا کہتے ہیں؟").replace("An angle smaller than 90 degrees is:","90 درجے سے چھوٹا زاویہ کیا کہلاتا ہے؟").replace("How many vertices does a cube have?","مکعب کے کتنے کونے ہوتے ہیں؟").replace("Which shape has four equal sides?","کس شکل کے چاروں اضلاع برابر ہوتے ہیں؟");
   }
  }
  if(cls===4 && (topic==="Factorization" || topic==="Prime number, composite numbers identification")) return x+" English: "+String(q);
  return x;
 }
 for(const cls of [3,4,5]){
  const subjects=data[cls]||{};
  const math=subjects.Mathematics||{};
  for(const [topic,items] of Object.entries(math)){
   const label=topicNames[cls]?.[topic];
   if(label) math[label]=items;
   if(label) delete math[topic];
   for(const item of items||[]){
    const qkey=item.q!==undefined?"q":"question";
    item[qkey]=urduQuestion(item[qkey],cls,topic);
    const opts=item.o||item.options||[];
    const mapped=opts.map(v=>{
     let out=String(v);
     for(const [en,ur] of Object.entries(words)) out=out.replace(new RegExp("\\b"+en+"\\b","gi"),ur);
     return out.replace(/centi/gi,"سینٹی").replace(/centiمیٹر/gi,"سینٹی میٹر").replace(/دونوں same/gi,"دونوں برابر").replace(/کوئی بھی نہیں اولی عدد nor مرکب عدد/gi,"نہ اولی نہ مرکب عدد").replace(/Even اولی عدد/gi,"جفت اولی عدد").replace(/One چوتھائی/gi,"ایک چوتھائی").replace(/One پورا/gi,"ایک مکمل").replace(/rupees/gi,"روپے").replace(/litres/gi,"لیٹر").replace(/litre/gi,"لیٹر").replace(/mL/gi,"ملی لیٹر").replace(/metres/gi,"میٹر").replace(/centimetres/gi,"سینٹی میٹر");
    });
    if(cls===4 && topic==="Factorization"){ for(let j=0;j<mapped.length;j++) mapped[j]="Factors / عوامل: "+mapped[j]; }
    if(cls===4 && topic==="Prime number, composite numbers identification"){ const primes=[2,3,5,7,11,13,17,19,23,29,31]; for(let j=0;j<mapped.length;j++){ const num=parseInt(String(mapped[j]).match(/[0-9]+/)?.[0]||"0",10); const tag=num===1?"Neither / نہ اولی نہ مرکب":primes.includes(num)?"Prime / اولی عدد":"Composite / مرکب عدد"; mapped[j]=String(mapped[j])+" ("+tag+")"; } }
    if(item.o) item.o=mapped; else item.options=mapped;
   }
  }
 }
})();
