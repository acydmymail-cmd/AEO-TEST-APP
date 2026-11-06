window.QUESTIONS_DATA = window.QUESTIONS_DATA || {};

const makeMCQs = (items) => items.map(([question, options, answer]) => ({
  question, options, answer
}));

window.QUESTIONS_DATA[4] = window.QUESTIONS_DATA[4] || {};
window.QUESTIONS_DATA[5] = window.QUESTIONS_DATA[5] || {};

// ================= CLASS 4 ENGLISH =================

window.QUESTIONS_DATA[4].English = {
  "Helping words": makeMCQs([
    ["She ___ a doctor.", ["am","is","are","be"], 1],
    ["They ___ playing.", ["is","are","am","was"], 1],
    ["I ___ happy.", ["is","am","are","be"], 1],
    ["He ___ my brother.", ["are","am","is","were"], 2],
    ["We ___ students.", ["is","am","are","was"], 2],
    ["The bird ___ flying.", ["are","is","am","were"], 1],
    ["You ___ very kind.", ["is","am","are","was"], 2],
    ["It ___ raining.", ["are","am","is","were"], 2],
    ["The boys ___ at school.", ["is","am","are","was"], 2],
    ["Sara ___ reading a book.", ["are","is","am","be"], 1]
  ]),

  "Use of pronoun": makeMCQs([
    ["Ali is a boy. ___ is tall.", ["She","He","It","They"], 1],
    ["Sara is my friend. ___ is kind.", ["He","She","It","We"], 1],
    ["The cat is hungry. ___ needs food.", ["They","He","It","We"], 2],
    ["Ali and Ahmed are brothers. ___ play together.", ["He","She","They","It"], 2],
    ["My name is Sara. ___ am a student.", ["She","I","He","They"], 1],
    ["This is my father. ___ is a teacher.", ["She","He","It","We"], 1],
    ["The books are new. ___ are colourful.", ["It","They","He","She"], 1],
    ["My mother and I are happy. ___ are smiling.", ["They","We","He","It"], 1],
    ["The dog is brown. ___ is friendly.", ["It","They","We","She"], 0],
    ["Where are the children? ___ are outside.", ["He","She","They","It"], 2]
  ]),

  "Adjective": makeMCQs([
    ["Find the adjective: A beautiful flower.", ["A","Beautiful","Flower","The"], 1],
    ["Find the adjective: A tall boy.", ["A","Tall","Boy","The"], 1],
    ["Which word describes colour?", ["Run","Blue","Eat","Jump"], 1],
    ["Find the adjective: Sweet mango.", ["Sweet","Mango","Eat","The"], 0],
    ["Which is an adjective?", ["Quickly","Happy","Run","Book"], 1],
    ["Find the adjective: Small cat.", ["Cat","Small","Run","The"], 1],
    ["Which word describes size?", ["Big","Sing","Walk","Read"], 0],
    ["Find the adjective: Cold water.", ["Water","Cold","Drink","A"], 1],
    ["Which word describes a feeling?", ["Chair","Sad","Table","Pen"], 1],
    ["Find the adjective: Old house.", ["House","Old","Live","The"], 1]
  ]),

  "Compound words": makeMCQs([
    ["Sun + Flower makes:", ["Sunrain","Sunflower","Flowerpot","Sunlight"], 1],
    ["Rain + Bow makes:", ["Rainfall","Rainbow","Raincoat","Rainwater"], 1],
    ["Tooth + Brush makes:", ["Toothpaste","Toothbrush","Toothache","Brushes"], 1],
    ["Foot + Ball makes:", ["Football","Footstep","Balloon","Footwear"], 0],
    ["Which word is a compound word?", ["Apple","Notebook","Happy","Quick"], 1],
    ["Bed + Room makes:", ["Bedroom","Bathroom","Bedtime","Roommate"], 0],
    ["Butter + Fly makes:", ["Butterfly","Buttercup","Flyover","Buttercream"], 0],
    ["Cup + Cake makes:", ["Cupboard","Cupcake","Cups","Cake"], 1],
    ["Which word is a compound word?", ["Sunshine","Sunny","Bright","Light"], 0],
    ["Class + Room makes:", ["Classmate","Classroom","Classwork","Classbook"], 1]
  ]),

  "Types of Nouns": makeMCQs([
    ["Which is a proper noun?", ["City","Ali","Boy","School"], 1],
    ["Which is a common noun?", ["Pakistan","Monday","Teacher","Ahmed"], 2],
    ["Which is a noun?", ["Run","Beautiful","Table","Quickly"], 2],
    ["Which is a proper noun?", ["Country","Lahore","River","Girl"], 1],
    ["Which is a common noun?", ["Sara","Karachi","Book","Pakistan"], 2],
    ["Which is a collective noun?", ["Boy","Team","Chair","Pencil"], 1],
    ["Which is an abstract noun?", ["Table","Honesty","Apple","Bag"], 1],
    ["Which is a proper noun?", ["School","City","Monday","Teacher"], 2],
    ["Which is a common noun?", ["Ahmed","Pakistan","Mountain","Asia"], 2],
    ["Which is a collective noun?", ["Class","Pen","Dog","House"], 0]
  ]),

  "Synonym": makeMCQs([
    ["Synonym of Happy:", ["Sad","Glad","Angry","Tired"], 1],
    ["Synonym of Big:", ["Small","Large","Tiny","Short"], 1],
    ["Synonym of Quick:", ["Slow","Fast","Late","Weak"], 1],
    ["Synonym of Begin:", ["End","Start","Stop","Close"], 1],
    ["Synonym of Beautiful:", ["Ugly","Pretty","Bad","Dirty"], 1],
    ["Synonym of Smart:", ["Clever","Lazy","Weak","Slow"], 0],
    ["Synonym of Small:", ["Huge","Tiny","Tall","Wide"], 1],
    ["Synonym of Angry:", ["Calm","Mad","Glad","Kind"], 1],
    ["Synonym of Silent:", ["Noisy","Quiet","Loud","Busy"], 1],
    ["Synonym of Easy:", ["Hard","Simple","Difficult","Heavy"], 1]
  ]),

  "Comprehension": makeMCQs([
    ["Ali has a pet cat. What pet does Ali have?", ["Dog","Cat","Bird","Fish"], 1],
    ["The sun rises in the east. Where does it rise?", ["West","North","East","South"], 2],
    ["Sara goes to school daily. Where does Sara go?", ["Park","School","Market","Hospital"], 1],
    ["A cow gives us milk. What does a cow give?", ["Water","Milk","Juice","Tea"], 1],
    ["Birds fly with their ___.", ["Legs","Wings","Tails","Beaks"], 1],
    ["Ahmed likes apples. Which fruit does he like?", ["Mangoes","Apples","Bananas","Grapes"], 1],
    ["Fish live in ___.", ["Trees","Water","Desert","Sky"], 1],
    ["A farmer grows crops. Who grows crops?", ["Doctor","Farmer","Teacher","Pilot"], 1],
    ["The moon shines at night. When does it shine?", ["Morning","Afternoon","Night","Noon"], 2],
    ["We use an umbrella when it rains. What do we use?", ["Fan","Umbrella","Book","Shoes"], 1]
  ])
};

// ================= CLASS 4 MATHEMATICS =================

window.QUESTIONS_DATA[4].Mathematics = {
  "Decimal question (+,-,÷,×)": makeMCQs([
    ["2.5 + 1.5 = ?", ["3","4","5","6"], 1],
    ["5.5 - 2.5 = ?", ["2","3","4","5"], 1],
    ["1.2 + 2.3 = ?", ["3.5","4.5","2.5","3.0"], 0],
    ["4.8 - 1.3 = ?", ["2.5","3.5","4.5","5.5"], 1],
    ["2.5 × 2 = ?", ["4","5","6","7"], 1],
    ["6.0 ÷ 2 = ?", ["2","3","4","5"], 1],
    ["0.5 + 0.5 = ?", ["0.5","1.0","1.5","2.0"], 1],
    ["3.6 - 1.1 = ?", ["2.5","2.6","3.5","1.5"], 0],
    ["1.5 × 2 = ?", ["2.5","3.0","3.5","4.0"], 1],
    ["8.0 ÷ 4 = ?", ["1","2","3","4"], 1]
  ]),

  "Conversion: Week to days; Liter to milliliters; Kg to g etc.": makeMCQs([
    ["1 week = how many days?", ["5","6","7","8"], 2],
    ["2 weeks = how many days?", ["7","10","14","21"], 2],
    ["1 litre = how many millilitres?", ["100","500","1000","2000"], 2],
    ["2 litres = how many millilitres?", ["200","1000","2000","3000"], 2],
    ["1 kilogram = how many grams?", ["100","500","1000","2000"], 2],
    ["3 kilograms = how many grams?", ["300","3000","30","30000"], 1],
    ["1 metre = how many centimetres?", ["10","50","100","1000"], 2],
    ["2 metres = how many centimetres?", ["20","100","200","2000"], 2],
    ["1 hour = how many minutes?", ["30","45","60","100"], 2],
    ["1 day = how many hours?", ["12","18","24","36"], 2]
  ]),

  "Measurements": makeMCQs([
    ["Which unit measures length?", ["Kilogram","Metre","Litre","Minute"], 1],
    ["Which unit measures weight?", ["Metre","Kilogram","Litre","Hour"], 1],
    ["Which unit measures liquid?", ["Gram","Litre","Centimetre","Second"], 1],
    ["How many centimetres are in 1 metre?", ["10","50","100","1000"], 2],
    ["Which is longer?", ["1 metre","50 centimetres","Both same","10 centimetres"], 0],
    ["Which tool measures length?", ["Clock","Ruler","Scale for weight","Cup"], 1],
    ["What do we use to measure time?", ["Ruler","Clock","Jug","Thermometer"], 1],
    ["Which is heavier?", ["1 kg cotton","2 kg rice","Both same","500 g rice"], 1],
    ["Which unit is suitable for measuring a pencil?", ["Kilometre","Centimetre","Litre","Kilogram"], 1],
    ["Which unit is suitable for measuring a road?", ["Millimetre","Kilometre","Gram","Litre"], 1]
  ]),

  "Factorization": makeMCQs([
    ["Factors of 6 are:", ["1,2,3,6","1,6","2,6","1,3"], 0],
    ["Which is a factor of 12?", ["5","7","3","8"], 2],
    ["Factors of 10 are:", ["1,2,5,10","1,3,10","2,4,10","1,5"], 0],
    ["Which is a factor of 15?", ["4","5","6","8"], 1],
    ["Factors of 8 are:", ["1,2,4,8","1,3,8","2,5,8","1,8"], 0],
    ["Which is a factor of 20?", ["3","6","4","7"], 2],
    ["Factors of 9 are:", ["1,2,9","1,3,9","2,3,9","1,9"], 1],
    ["Which is a factor of 18?", ["5","7","6","11"], 2],
    ["Which number is a factor of 24?", ["5","7","8","11"], 2],
    ["Factors of 5 are:", ["1,5","1,2,5","2,5","1,3,5"], 0]
  ]),

  "Prime number, composite numbers identification": makeMCQs([
    ["Which is a prime number?", ["4","6","7","9"], 2],
    ["Which is a composite number?", ["2","3","5","8"], 3],
    ["Is 11 a prime number?", ["Yes","No","Both","None"], 0],
    ["Which number has only two factors?", ["4","6","7","9"], 2],
    ["Which is a composite number?", ["13","17","19","12"], 3],
    ["The number 1 is:", ["Prime","Composite","Neither prime nor composite","Even prime"], 2],
    ["Which is a prime number?", ["15","21","23","25"], 2],
    ["Which is a composite number?", ["2","3","11","15"], 3],
    ["How many factors does 7 have?", ["1","2","3","4"], 1],
    ["Which is the only even prime number?", ["2","4","6","8"], 0]
  ]),

  "Identification values from graph": makeMCQs([
    ["In a bar graph, Monday = 5 and Tuesday = 8. Which day has more?", ["Monday","Tuesday","Both","Neither"], 1],
    ["A graph shows 4 apples and 7 oranges. How many fruits altogether?", ["9","10","11","12"], 2],
    ["If one symbol represents 2 books, 3 symbols represent how many books?", ["3","5","6","8"], 2],
    ["A graph shows 10 boys and 6 girls. How many more boys?", ["2","3","4","5"], 2],
    ["Which graph uses bars to show data?", ["Bar graph","Map","Clock","Calendar"], 0],
    ["A chart shows 5, 7 and 3. What is the greatest value?", ["3","5","7","15"], 2],
    ["A graph shows 4, 4 and 4. What is their total?", ["8","10","12","16"], 2],
    ["If 1 picture means 5 students, 2 pictures mean:", ["5","10","15","20"], 1],
    ["Values are 2, 6 and 9. What is the smallest?", ["2","6","9","17"], 0],
    ["A graph shows 8 red balls and 5 blue balls. Total balls?", ["11","12","13","14"], 2]
  ]),

  "Four digits addition with carry and subtraction from borrow": makeMCQs([
    ["2345 + 1234 = ?", ["3579","3679","3578","3479"], 0],
    ["4567 + 2345 = ?", ["6812","6912","7012","6911"], 1],
    ["1256 + 2348 = ?", ["3504","3604","3704","3603"], 1],
    ["3489 + 1215 = ?", ["4604","4704","4804","4703"], 1],
    ["5000 - 1234 = ?", ["3766","3765","3866","3666"], 0],
    ["4321 - 2109 = ?", ["2212","2312","2211","2112"], 0],
    ["6000 - 2456 = ?", ["3544","3644","3444","3545"], 0],
    ["7250 - 3180 = ?", ["4070","4170","4270","4071"], 0],
    ["1234 + 5678 = ?", ["6812","6912","7012","6911"], 1],
    ["8000 - 4567 = ?", ["3433","3533","3333","3432"], 0]
  ]),

  "Time": makeMCQs([
    ["How many minutes are in one hour?", ["30","45","60","100"], 2],
    ["How many hours are in one day?", ["12","18","24","36"], 2],
    ["Quarter past 3 means:", ["3:15","3:30","3:45","4:15"], 0],
    ["Half past 6 means:", ["6:15","6:30","6:45","7:30"], 1],
    ["How many minutes are in half an hour?", ["15","20","30","60"], 2],
    ["What time is 1 hour after 4:00?", ["4:30","5:00","5:30","6:00"], 1],
    ["What time is 30 minutes after 2:15?", ["2:30","2:45","3:00","3:15"], 1],
    ["How many days are in a week?", ["5","6","7","8"], 2],
    ["How many months are in a year?", ["10","11","12","13"], 2],
    ["Which hand shows minutes on a clock?", ["Short hand","Long hand","Both","None"], 1]
  ]),

  "Recognize number from words i.e. Eighty-four thousand fifty-six": makeMCQs([
    ["Eighty-four thousand fifty-six is:", ["84056","84506","84065","80456"], 0],
    ["Twenty-three thousand four hundred is:", ["23400","23040","20430","2340"], 0],
    ["Fifty thousand and twenty is:", ["50200","50020","52000","50002"], 1],
    ["Six thousand three hundred fifteen is:", ["6315","60315","63015","6135"], 0],
    ["Ninety thousand five is:", ["90050","90500","90005","95000"], 2],
    ["Forty-two thousand seven hundred is:", ["42700","42070","40270","47200"], 0],
    ["Seventy-one thousand thirty-two is:", ["71032","71302","70132","71023"], 0],
    ["Thirty thousand eight hundred nine is:", ["30890","30089","30809","38009"], 2],
    ["Eight thousand forty is:", ["8040","8400","8004","80400"], 0],
    ["Sixty-five thousand six hundred six is:", ["65606","65066","66506","65660"], 0]
  ])
};

// ================= CLASS 4 URDU =================

window.QUESTIONS_DATA[4].Urdu = {
  "فعل حال، فعل ماضی اور فعل مستقبل کے جملوں کی پہچان": makeMCQs([
    ["'علی کھیلتا ہے' کون سا زمانہ ہے؟", ["ماضی","حال","مستقبل","کوئی نہیں"], 1],
    ["'علی نے کھانا کھایا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 1],
    ["'وہ کل آئے گا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 2],
    ["'میں پڑھ رہا ہوں' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 0],
    ["'بارش ہوئی' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 1],
    ["'ہم بازار جائیں گے' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 2],
    ["'بچہ سو رہا ہے' کون سا زمانہ ہے؟", ["ماضی","حال","مستقبل","کوئی نہیں"], 1],
    ["'اس نے خط لکھا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 1],
    ["'میں کل کھیلوں گا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 2],
    ["'پرندے اڑتے ہیں' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 0]
  ]),

  "اسم ضمیر کے فاعلی حالت کے جملوں کی پہچان": makeMCQs([
    ["'میں اسکول جاتا ہوں' میں ضمیر کون سا ہے؟", ["اسکول","جاتا","میں","ہوں"], 2],
    ["'وہ کتاب پڑھتی ہے' میں ضمیر کون سا ہے؟", ["کتاب","وہ","پڑھتی","ہے"], 1],
    ["'ہم کھیلتے ہیں' میں ضمیر کون سا ہے؟", ["کھیلتے","ہیں","ہم","کوئی نہیں"], 2],
    ["'تم اچھے ہو' میں ضمیر کون سا ہے؟", ["اچھے","ہو","تم","کوئی نہیں"], 2],
    ["'یہ میرا گھر ہے' میں ضمیر کون سا ہے؟", ["گھر","میرا","یہ","ہے"], 2],
    ["'وہ بازار گیا' میں فاعلی ضمیر کون سا ہے؟", ["بازار","گیا","وہ","کوئی نہیں"], 2],
    ["'آپ استاد ہیں' میں ضمیر کون سا ہے؟", ["استاد","ہیں","آپ","کوئی نہیں"], 2],
    ["'ہم نے سبق پڑھا' میں ضمیر کون سا ہے؟", ["سبق","پڑھا","ہم","نے"], 2],
    ["'میں خوش ہوں' میں ضمیر کون سا ہے؟", ["خوش","ہوں","میں","کوئی نہیں"], 2],
    ["'تم کہاں جا رہے ہو؟' میں ضمیر کون سا ہے؟", ["کہاں","جا","تم","رہے"], 2]
  ]),

  "الف بائی الفاظ کی پہچان": makeMCQs([
    ["الف بائی ترتیب میں سب سے پہلے کون سا لفظ آئے گا؟", ["باغ","آم","تارا","پھول"], 1],
    ["الف بائی ترتیب میں ان الفاظ میں سے پہلے کون سا آئے گا؟", ["پتنگ","تتلی","انار","بکری"], 2],
    ["الف بائی ترتیب سے اگلا لفظ منتخب کریں: آم، انار، ___", ["بکری","انگور","تارا","پھول"], 1],
    ["ان الفاظ کو الف بائی ترتیب میں رکھیں: کتاب، قلم، کرسی۔ پہلے کون سا آئے گا؟", ["قلم","کتاب","کرسی","کرسی کے بعد قلم"], 1],
    ["الف بائی ترتیب میں پہلے کون سا لفظ آئے گا؟", ["گھر","چاند","درخت","خوشی"], 1],
    ["الف بائی ترتیب میں پہلے کون سا لفظ آئے گا؟", ["چاند","خوشی","حلوہ","جوتا"], 3],
    ["الف بائی ترتیب میں پہلے کون سا لفظ آئے گا؟", ["مچھلی","لالہ","کتاب","نہر"], 2],
    ["الف بائی ترتیب میں پہلے کون سا لفظ آئے گا؟", ["انار","آم","باغ","پھول"], 1],
    ["الف بائی ترتیب میں پہلے کون سا لفظ آئے گا؟", ["شیر","سورج","صندوق","ضرب"], 1],
    ["الف بائی ترتیب میں پہلے کون سا لفظ آئے گا؟", ["پاکستان","پتنگ","تارا","ٹماٹر"], 0]
  ]),

  "مذکر مؤنث جملوں کی پہچان": makeMCQs([
    ["'لڑکا کھیل رہا ہے' میں مذکر لفظ کون سا ہے؟", ["کھیل","لڑکا","رہا","ہے"], 1],
    ["'لڑکی پڑھ رہی ہے' میں مؤنث لفظ کون سا ہے؟", ["پڑھ","رہی","لڑکی","ہے"], 2],
    ["'استاد آیا' کا مؤنث کیا ہوگا؟", ["استادہ آئی","استاد آئے","استاد گیا","استاد آیا"], 0],
    ["'بیٹا' کا مؤنث کیا ہے؟", ["بھائی","بیٹی","باپ","بچہ"], 1],
    ["'گھوڑا دوڑتا ہے' میں مذکر کون سا ہے؟", ["دوڑتا","ہے","گھوڑا","کوئی نہیں"], 2],
    ["'ماں کھانا پکاتی ہے' میں مؤنث کون ہے؟", ["کھانا","پکاتی","ماں","ہے"], 2],
    ["'مرغا' کا مؤنث کیا ہے؟", ["مرغی","مرغے","مرغ","چوزہ"], 0],
    ["'بادشاہ' کا مؤنث کیا ہے؟", ["شہزادہ","ملکہ","وزیر","بادشاہت"], 1],
    ["'دلہا' کا مؤنث کیا ہے؟", ["دلہن","دولہا","بیٹا","باپ"], 0],
    ["'شیرنی شکار کرتی ہے' میں مؤنث لفظ کون سا ہے؟", ["شکار","کرتی","شیرنی","ہے"], 2]
  ]),

  "حروف جار کا استعمال": makeMCQs([
    ["کتاب میز ___ ہے۔", ["پر","سے","کو","تک"], 0],
    ["علی گھر ___ آیا۔", ["میں","سے","پر","کو"], 1],
    ["بچہ کمرے ___ ہے۔", ["میں","سے","تک","کو"], 0],
    ["احمد اسکول ___ گیا۔", ["سے","کو","میں","پر"], 2],
    ["پرندہ درخت ___ بیٹھا ہے۔", ["پر","سے","کو","تک"], 0],
    ["وہ لاہور ___ آیا۔", ["میں","سے","پر","کو"], 1],
    ["امی بازار ___ گئیں۔", ["میں","سے","پر","کو"], 0],
    ["تحفہ علی ___ دیا۔", ["نے","کو","سے","پر"], 1],
    ["ہم صبح ___ شام تک پڑھتے ہیں۔", ["سے","کو","پر","میں"], 0],
    ["بچہ کرسی ___ بیٹھا ہے۔", ["کے","پر","سے","کو"], 1]
  ]),

  "زمانے کی پہچان": makeMCQs([
    ["'وہ کھاتا ہے' کون سا زمانہ ہے؟", ["ماضی","حال","مستقبل","کوئی نہیں"], 1],
    ["'وہ کھائے گا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 2],
    ["'وہ کھا چکا تھا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 1],
    ["'میں لکھتا ہوں' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 0],
    ["'ہم کل آئیں گے' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 2],
    ["'بارش ہو رہی تھی' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 1],
    ["'بچہ سوئے گا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 2],
    ["'اس نے خط لکھا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 1],
    ["'ہم کھیل رہے ہیں' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 0],
    ["'وہ کل گیا تھا' کون سا زمانہ ہے؟", ["حال","ماضی","مستقبل","کوئی نہیں"], 1]
  ]),

  "پیراگراف پڑھ کر مسئلے کا حل بتانا (Critical Thinking)": makeMCQs([
    ["علی نے راستے میں زخمی پرندہ دیکھا۔ اسے کیا کرنا چاہیے؟", ["اسے چھوڑ دے","اس کی مدد کرے","اسے تنگ کرے","اسے پتھر مارے"], 1],
    ["بارش میں ایک بچہ بھیگ رہا ہے۔ آپ کیا کریں گے؟", ["مذاق اڑائیں","چھتری دیں","نظر انداز کریں","اسے دھکا دیں"], 1],
    ["کلاس میں پانی گر گیا ہے۔ کیا کرنا چاہیے؟", ["وہیں چھوڑ دیں","صفائی کریں","دوڑیں","شور کریں"], 1],
    ["دو دوست ایک کھلونا چاہتے ہیں۔ بہتر حل کیا ہے؟", ["لڑائی کریں","باری باری کھیلیں","کھلونا توڑیں","چھین لیں"], 1],
    ["راستے میں بٹوا ملے تو کیا کرنا چاہیے؟", ["رکھ لیں","مالک کو واپس کریں","پھینک دیں","چھپا دیں"], 1],
    ["درخت کے پتے مرجھا رہے ہیں۔ کیا کرنا چاہیے؟", ["پانی دیں","کاٹ دیں","آگ لگائیں","نظر انداز کریں"], 0],
    ["ایک بچہ پڑھ نہیں پا رہا۔ آپ کیا کریں گے؟", ["اس کا مذاق اڑائیں","اس کی مدد کریں","اسے ڈانٹیں","کتاب چھینیں"], 1],
    ["کچرا سڑک پر پڑا ہے۔ مناسب عمل کیا ہے؟", ["مزید کچرا ڈالیں","کوڑے دان میں ڈالیں","پاؤں سے پھیلائیں","وہیں چھوڑیں"], 1],
    ["آپ کا دوست بیمار ہے۔ آپ کیا کریں گے؟", ["اسے تنگ کریں","اس کی خیریت پوچھیں","اس سے لڑیں","اسے بھول جائیں"], 1],
    ["ٹریفک سگنل سرخ ہے۔ کیا کرنا چاہیے؟", ["چل پڑیں","رک جائیں","تیز دوڑیں","ہارن بجائیں"], 1]
  ])
};

// ================= CLASS 5 ENGLISH =================

window.QUESTIONS_DATA[5].English = {
  "Irregular verb, irregular noun": makeMCQs([
    ["Past tense of Go is:", ["Goed","Went","Going","Goes"], 1],
    ["Past tense of Eat is:", ["Eated","Ate","Eating","Eats"], 1],
    ["Plural of Child is:", ["Childs","Children","Childes","Childrens"], 1],
    ["Plural of Man is:", ["Mans","Men","Manes","Mens"], 1],
    ["Past tense of Write is:", ["Writed","Wrote","Written","Writing"], 1],
    ["Plural of Foot is:", ["Foots","Feet","Feets","Footes"], 1],
    ["Past tense of See is:", ["Seed","Saw","Seeing","Seen"], 1],
    ["Plural of Mouse is:", ["Mouses","Mice","Mices","Mouse"], 1],
    ["Past tense of Buy is:", ["Buyed","Bought","Buying","Buys"], 1],
    ["Plural of Tooth is:", ["Tooths","Teeth","Teeths","Toothes"], 1]
  ]),

  "Consonant sounds words": makeMCQs([
    ["Which word begins with the /b/ sound?", ["Ball","Apple","Egg","Ink"], 0],
    ["Which word begins with the /k/ sound?", ["Cat","Sun","Van","Man"], 0],
    ["Which word begins with the /m/ sound?", ["Moon","Dog","Fish","Pen"], 0],
    ["Which word begins with the /s/ sound?", ["Sun","Ball","Goat","Jug"], 0],
    ["Which word begins with the /f/ sound?", ["Fan","Apple","Book","Cup"], 0],
    ["Which word begins with the /t/ sound?", ["Tree","Moon","Van","Ring"], 0],
    ["Which word begins with the /d/ sound?", ["Door","Fish","Sun","Pen"], 0],
    ["Which word begins with the /p/ sound?", ["Pen","Cat","Dog","Man"], 0],
    ["Which word begins with the /g/ sound?", ["Goat","Apple","Fish","Sun"], 0],
    ["Which word begins with the /r/ sound?", ["Rose","Ball","Cup","Jam"], 0]
  ]),

  "Adverb of frequency": makeMCQs([
    ["Which word means every time?", ["Never","Always","Rarely","Sometimes"], 1],
    ["Which word means not ever?", ["Always","Often","Never","Usually"], 2],
    ["I ___ brush my teeth twice a day.", ["Never","Always","Rarely","Hardly"], 1],
    ["Which adverb means many times?", ["Often","Never","Seldom","Once"], 0],
    ["She ___ visits her grandmother, about once a week.", ["Never","Usually","Always","Rarely"], 1],
    ["Which word means occasionally?", ["Sometimes","Always","Never","Daily"], 0],
    ["He is ___ late; almost never.", ["Always","Often","Rarely","Usually"], 2],
    ["Which word shows frequency?", ["Beautiful","Quickly","Usually","Blue"], 2],
    ["I ___ forget my homework. It happens almost every day.", ["Never","Often","Rarely","Once"], 1],
    ["Which adverb means zero times?", ["Sometimes","Often","Never","Usually"], 2]
  ]),

  "Rhyming words": makeMCQs([
    ["Which word rhymes with Cat?", ["Dog","Hat","Sun","Pen"], 1],
    ["Which word rhymes with Light?", ["Night","Late","Lot","Let"], 0],
    ["Which word rhymes with Book?", ["Look","Back","Bake","Bike"], 0],
    ["Which word rhymes with Tree?", ["Try","Free","Tray","Throw"], 1],
    ["Which word rhymes with Cake?", ["Lake","Cook","Luck","Lock"], 0],
    ["Which word rhymes with Ball?", ["Bell","Tall","Bull","Bill"], 1],
    ["Which word rhymes with Rain?", ["Run","Train","Room","Ring"], 1],
    ["Which word rhymes with Star?", ["Store","Car","Sit","Sun"], 1],
    ["Which word rhymes with Chair?", ["Cheer","Bear","Chore","Char"], 1],
    ["Which word rhymes with Day?", ["Boy","Say","Do","Die"], 1]
  ]),

  "Action words": makeMCQs([
    ["Which is an action word?", ["Table","Run","Blue","Happy"], 1],
    ["Which word shows an action?", ["Jump","Chair","Soft","Green"], 0],
    ["The baby can ___.", ["Sleep","Pencil","Beautiful","Red"], 0],
    ["Which is an action word?", ["Write","Book","Tall","Kind"], 0],
    ["Birds ___ in the sky.", ["Fly","Blue","Tree","Soft"], 0],
    ["Which word shows an action?", ["Sing","Apple","Small","Yellow"], 0],
    ["A fish can ___.", ["Swim","Read","Write","Talk"], 0],
    ["Which is an action word?", ["Dance","Table","Pretty","Cold"], 0],
    ["The boy can ___ a ball.", ["Throw","Green","Chair","Sweet"], 0],
    ["Which word is a verb?", ["Eat","House","Red","Big"], 0]
  ]),

  "Synonym & Antonym": makeMCQs([
    ["Synonym of Happy:", ["Sad","Glad","Angry","Weak"], 1],
    ["Antonym of Hot:", ["Warm","Cold","Heat","Boiling"], 1],
    ["Synonym of Big:", ["Large","Tiny","Short","Small"], 0],
    ["Antonym of Tall:", ["High","Short","Long","Big"], 1],
    ["Synonym of Quick:", ["Fast","Slow","Late","Weak"], 0],
    ["Antonym of Early:", ["Soon","Late","Fast","Quick"], 1],
    ["Synonym of Clever:", ["Smart","Lazy","Foolish","Weak"], 0],
    ["Antonym of Strong:", ["Powerful","Weak","Hard","Heavy"], 1],
    ["Synonym of Begin:", ["Start","Stop","Finish","Close"], 0],
    ["Antonym of Beautiful:", ["Pretty","Lovely","Ugly","Nice"], 2]
  ]),

  "Homophone words": makeMCQs([
    ["Which word sounds like 'Sea'?", ["See","Say","Saw","Sue"], 0],
    ["Which word sounds like 'Sun'?", ["Son","Soon","Sin","Seen"], 0],
    ["Which word sounds like 'Right'?", ["Write","Rate","Ride","Root"], 0],
    ["Which word sounds like 'Pair'?", ["Pear","Peer","Pour","Poor"], 0],
    ["Which word sounds like 'One'?", ["Won","Own","On","Win"], 0],
    ["Which word sounds like 'Flower'?", ["Flour","Floor","Fly","Flow"], 0],
    ["Which word sounds like 'Knight'?", ["Night","Net","Knot","Near"], 0],
    ["Which word sounds like 'Blue'?", ["Blew","Blow","Below","Black"], 0],
    ["Which word sounds like 'Hear'?", ["Here","Hair","Her","Hour"], 0],
    ["Which word sounds like 'Tail'?", ["Tale","Tile","Tell","Tall"], 0]
  ]),

  "Types of sentences i.e. interrogative, affirmative, negative etc.": makeMCQs([
    ["'What is your name?' is a:", ["Affirmative","Interrogative","Negative","Exclamatory"], 1],
    ["'I like mangoes.' is a:", ["Negative","Interrogative","Affirmative","Exclamatory"], 2],
    ["'I do not like tea.' is a:", ["Affirmative","Negative","Interrogative","Exclamatory"], 1],
    ["'What a beautiful day!' is a:", ["Interrogative","Negative","Exclamatory","Affirmative"], 2],
    ["Which sentence asks a question?", ["I am happy.","Are you ready?","He is tall.","She can sing."], 1],
    ["Which is a negative sentence?", ["He is kind.","She does not play.","They are here.","I am ready."], 1],
    ["'Please open the door.' is a:", ["Imperative","Interrogative","Negative","Exclamatory"], 0],
    ["'The sun is shining.' is a:", ["Question","Statement","Command","Exclamation"], 1],
    ["Which sentence shows strong feeling?", ["I am fine.","Where are you?","Wow! What a goal!","Sit down."], 2],
    ["'Do not run.' is a:", ["Affirmative","Negative command","Question","Exclamation"], 1]
  ])
};

// ================= CLASS 5 MATHEMATICS =================

window.QUESTIONS_DATA[5].Mathematics = {
  "Conversion": makeMCQs([
    ["1 kilometre = how many metres?", ["100","500","1000","10000"], 2],
    ["1 metre = how many centimetres?", ["10","50","100","1000"], 2],
    ["1 kilogram = how many grams?", ["100","500","1000","2000"], 2],
    ["1 litre = how many millilitres?", ["100","500","1000","2000"], 2],
    ["1 hour = how many minutes?", ["30","45","60","100"], 2],
    ["2 kilometres = how many metres?", ["200","2000","20000","20"], 1],
    ["3 kilograms = how many grams?", ["300","3000","30","30000"], 1],
    ["2 litres = how many millilitres?", ["200","1000","2000","3000"], 2],
    ["1 day = how many hours?", ["12","18","24","36"], 2],
    ["1 week = how many days?", ["5","6","7","8"], 2]
  ]),

  "Fraction": makeMCQs([
    ["In 3/8, the numerator is:", ["8","3","11","5"], 1],
    ["In 5/9, the denominator is:", ["5","9","14","4"], 1],
    ["Which is a proper fraction?", ["7/4","2/5","8/3","5/2"], 1],
    ["Which is an improper fraction?", ["1/4","3/8","7/3","2/5"], 2],
    ["Which fraction is equal to one half?", ["2/4","1/3","3/4","2/3"], 0],
    ["What is 1/4 + 1/4?", ["1/2","1/4","3/4","1"], 0],
    ["What is 3/5 - 1/5?", ["1/5","2/5","3/5","4/5"], 1],
    ["Which fraction is greater?", ["1/4","3/4","1/8","1/5"], 1],
    ["How many quarters make one whole?", ["2","3","4","5"], 2],
    ["Which fraction represents three out of four equal parts?", ["1/4","2/4","3/4","4/3"], 2]
  ]),

  "Percentage": makeMCQs([
    ["50% means:", ["Half","Quarter","Whole","Double"], 0],
    ["25% means:", ["Half","One quarter","Three quarters","Whole"], 1],
    ["100% means:", ["Half","Quarter","One whole","One tenth"], 2],
    ["10% of 100 is:", ["1","10","20","50"], 1],
    ["50% of 20 is:", ["5","10","15","20"], 1],
    ["25% of 40 is:", ["5","10","15","20"], 1],
    ["20% of 50 is:", ["5","10","15","20"], 1],
    ["75% of 100 is:", ["25","50","75","100"], 2],
    ["50% of 80 is:", ["20","30","40","50"], 2],
    ["10% of 200 is:", ["10","20","30","40"], 1]
  ]),

  "multiplication two digits with two digits": makeMCQs([
    ["12 × 12 = ?", ["124","134","144","154"], 2],
    ["15 × 11 = ?", ["155","165","175","185"], 1],
    ["21 × 13 = ?", ["263","273","283","293"], 1],
    ["14 × 12 = ?", ["158","168","178","188"], 1],
    ["23 × 11 = ?", ["243","253","263","273"], 1],
    ["16 × 15 = ?", ["220","230","240","250"], 2],
    ["25 × 12 = ?", ["250","275","300","325"], 2],
    ["32 × 11 = ?", ["342","352","362","372"], 1],
    ["18 × 14 = ?", ["242","252","262","272"], 1],
    ["24 × 13 = ?", ["302","312","322","332"], 1]
  ]),

  "Fraction simplification of fractions": makeMCQs([
    ["Simplify 2/4:", ["1/2","2/3","1/4","3/4"], 0],
    ["Simplify 3/6:", ["1/3","1/2","2/3","3/4"], 1],
    ["Simplify 4/8:", ["1/2","1/4","2/3","3/4"], 0],
    ["Simplify 5/10:", ["1/5","1/2","2/5","3/5"], 1],
    ["Simplify 6/9:", ["1/3","2/3","3/4","1/2"], 1],
    ["Simplify 8/12:", ["1/2","2/3","3/4","4/5"], 1],
    ["Simplify 10/15:", ["1/3","2/3","3/5","4/5"], 1],
    ["Simplify 12/16:", ["1/2","2/3","3/4","4/5"], 2],
    ["Simplify 9/12:", ["1/4","2/3","3/4","4/5"], 2],
    ["Simplify 15/20:", ["1/2","2/3","3/4","4/5"], 2]
  ]),

  "Decimal operation i.e. multiplication, division": makeMCQs([
    ["1.5 × 2 = ?", ["2.0","3.0","3.5","4.0"], 1],
    ["2.5 × 4 = ?", ["8","9","10","12"], 2],
    ["3.6 ÷ 2 = ?", ["1.2","1.8","2.0","2.2"], 1],
    ["4.8 ÷ 4 = ?", ["1.0","1.2","1.4","1.6"], 1],
    ["0.5 × 6 = ?", ["2","2.5","3","3.5"], 2],
    ["6.3 ÷ 3 = ?", ["2.0","2.1","2.2","2.3"], 1],
    ["1.2 × 3 = ?", ["3.2","3.6","4.0","4.2"], 1],
    ["8.4 ÷ 2 = ?", ["4.2","4.4","4.6","4.8"], 0],
    ["0.2 × 5 = ?", ["0.5","1.0","1.5","2.0"], 1],
    ["9.6 ÷ 4 = ?", ["2.2","2.3","2.4","2.5"], 2]
  ]),

  "Geometry": makeMCQs([
    ["How many sides does a triangle have?", ["2","3","4","5"], 1],
    ["How many sides does a square have?", ["3","4","5","6"], 1],
    ["How many sides does a pentagon have?", ["4","5","6","7"], 1],
    ["How many sides does a hexagon have?", ["5","6","7","8"], 1],
    ["How many right angles does a rectangle have?", ["2","3","4","5"], 2],
    ["A circle has how many corners?", ["0","1","2","4"], 0],
    ["What is the name of an angle of 90 degrees?", ["Acute","Right","Obtuse","Straight"], 1],
    ["An angle smaller than 90 degrees is:", ["Acute","Right","Obtuse","Straight"], 0],
    ["How many vertices does a cube have?", ["6","8","10","12"], 1],
    ["Which shape has four equal sides?", ["Triangle","Square","Circle","Oval"], 1]
  ])
};

// ================= CLASS 5 URDU =================

window.QUESTIONS_DATA[5].Urdu = {
  "مترادف الفاظ": makeMCQs([
    ["خوشی کا مترادف کیا ہے؟", ["غم","مسرت","دکھ","نفرت"], 1],
    ["خوبصورت کا مترادف کیا ہے؟", ["بدصورت","حسین","بےکار","برا"], 1],
    ["آغاز کا مترادف کیا ہے؟", ["اختتام","شروع","آخر","ختم"], 1],
    ["دوست کا مترادف کیا ہے؟", ["دشمن","رفیق","اجنبی","مخالف"], 1],
    ["بہادر کا مترادف کیا ہے؟", ["بزدل","دلیر","کمزور","ڈرپوک"], 1],
    ["روشنی کا مترادف کیا ہے؟", ["اندھیرا","نور","رات","سایہ"], 1],
    ["آسمان کا مترادف کیا ہے؟", ["زمین","فلک","سمندر","پہاڑ"], 1],
    ["پانی کا مترادف کیا ہے؟", ["آگ","آب","ہوا","مٹی"], 1],
    ["علم کا مترادف کیا ہے؟", ["جہالت","دانش","نادانی","غفلت"], 1],
    ["خوشبو کا مترادف کیا ہے؟", ["بدبو","مہک","دھواں","گرد"], 1]
  ]),

  "فعل، فاعل اور مفعول کی پہچان": makeMCQs([
    ["'علی نے کتاب پڑھی' میں فاعل کون ہے؟", ["کتاب","پڑھی","علی","نے"], 2],
    ["'علی نے کتاب پڑھی' میں مفعول کیا ہے؟", ["علی","کتاب","پڑھی","نے"], 1],
    ["'احمد نے خط لکھا' میں فعل کیا ہے؟", ["احمد","خط","نے","لکھا"], 3],
    ["'بچے نے گیند پھینکی' میں فاعل کون ہے؟", ["گیند","پھینکی","بچے","نے"], 2],
    ["'امی نے کھانا پکایا' میں مفعول کیا ہے؟", ["امی","پکایا","کھانا","نے"], 2],
    ["'استاد نے سبق پڑھایا' میں فعل کیا ہے؟", ["استاد","سبق","پڑھایا","نے"], 2],
    ["'لڑکی نے پھول توڑا' میں فاعل کون ہے؟", ["پھول","توڑا","لڑکی","نے"], 2],
    ["'احمد نے پانی پیا' میں مفعول کیا ہے؟", ["احمد","پانی","پیا","نے"], 1],
    ["'کسان نے فصل کاٹی' میں فعل کیا ہے؟", ["کسان","فصل","کاٹی","نے"], 2],
    ["'بلی نے دودھ پیا' میں فاعل کون ہے؟", ["دودھ","پیا","بلی","نے"], 2]
  ]),

  "اسم نکرہ، اسم معرفہ اور اسم صفت کی پہچان": makeMCQs([
    ["'لڑکا' کس قسم کا اسم ہے؟", ["اسم معرفہ","اسم نکرہ","اسم صفت","فعل"], 1],
    ["'پاکستان' کس قسم کا اسم ہے؟", ["اسم نکرہ","اسم معرفہ","اسم صفت","فعل"], 1],
    ["'خوبصورت پھول' میں اسم صفت کون سا ہے؟", ["پھول","خوبصورت","میں","کوئی نہیں"], 1],
    ["'لاہور' کس قسم کا اسم ہے؟", ["اسم نکرہ","اسم معرفہ","اسم صفت","فعل"], 1],
    ["'کتاب' کس قسم کا اسم ہے؟", ["اسم نکرہ","اسم معرفہ","اسم صفت","فعل"], 0],
    ["'نیک بچہ' میں اسم صفت کون سا ہے؟", ["بچہ","نیک","میں","ہے"], 1],
    ["'علامہ اقبال' کس قسم کا اسم ہے؟", ["اسم نکرہ","اسم معرفہ","اسم صفت","فعل"], 1],
    ["'پہاڑ' کس قسم کا اسم ہے؟", ["اسم نکرہ","اسم معرفہ","اسم صفت","فعل"], 0],
    ["'میٹھا آم' میں اسم صفت کون سا ہے؟", ["آم","میٹھا","ہے","کوئی نہیں"], 1],
    ["'دریائے سندھ' کس قسم کا اسم ہے؟", ["اسم نکرہ","اسم معرفہ","اسم صفت","فعل"], 1]
  ]),

  "الفاظ معانی": makeMCQs([
    ["محنت کا مطلب کیا ہے؟", ["کوشش","آرام","نیند","کھیل"], 0],
    ["شفقت کا مطلب کیا ہے؟", ["غصہ","پیار","نفرت","دشمنی"], 1],
    ["اتحاد کا مطلب کیا ہے؟", ["لڑائی","مل جل کر رہنا","جدائی","تنہائی"], 1],
    ["آزادی کا مطلب کیا ہے؟", ["غلامی","خود مختاری","قید","مجبوری"], 1],
    ["خوش اخلاقی کا مطلب کیا ہے؟", ["برا برتاؤ","اچھا برتاؤ","غصہ","جھوٹ"], 1],
    ["قربانی کا مطلب کیا ہے؟", ["اپنا فائدہ","دوسروں کے لیے ایثار","لالچ","نفرت"], 1],
    ["دیانت داری کا مطلب کیا ہے؟", ["ایمان داری","جھوٹ","دھوکا","چوری"], 0],
    ["فطرت کا مطلب کیا ہے؟", ["قدرت","عمارت","بازار","کتاب"], 0],
    ["مسرت کا مطلب کیا ہے؟", ["غم","خوشی","غصہ","خوف"], 1],
    ["ذمہ داری کا مطلب کیا ہے؟", ["فرض","آرام","کھیل","شوق"], 0]
  ]),

  "پیراگراف پڑھ کر عنوان دینا": makeMCQs([[
    ["پیراگراف: ہمارے وطن پاکستان میں بہت سے خوبصورت مقامات ہیں۔ شمالی علاقوں میں بلند پہاڑ اور صاف دریا ہیں۔ لوگ محنت اور محبت سے رہتے ہیں۔ ہمیں اپنے وطن کی حفاظت اور ترقی کے لیے کام کرنا چاہیے۔ مناسب عنوان کیا ہے؟", ["میرا وطن پاکستان","میرا گھر","میرا باغ","میرا کمرہ"], 0],
    ["پیراگراف: درخت ہماری زندگی کے لیے بہت ضروری ہیں۔ یہ ہمیں پھل اور سایہ دیتے ہیں۔ درخت ہوا کو صاف کرنے میں مدد کرتے ہیں۔ ہمیں زیادہ درخت لگانے اور ان کی دیکھ بھال کرنے چاہیے۔ مناسب عنوان کیا ہے؟", ["درختوں کے فائدے","کھیل کود","میرا اسکول","بارش"], 0],
    ["پیراگراف: صفائی اچھی صحت کی بنیاد ہے۔ صاف گھر اور گلی میں بیماریاں کم پھیلتی ہیں۔ ہمیں کوڑا ہمیشہ کوڑے دان میں ڈالنا چاہیے۔ ہر شخص کو اپنے ماحول کو صاف رکھنا چاہیے۔ مناسب عنوان کیا ہے؟", ["صفائی کی اہمیت","میرا دوست","کھیل","سفر"], 0],
    ["پیراگراف: کتابیں ہماری بہترین دوست ہیں۔ ان سے ہمیں نئی باتیں اور علم حاصل ہوتا ہے۔ اچھی کتابیں ہماری سوچ کو بہتر بناتی ہیں۔ ہمیں روزانہ کچھ وقت مطالعے کے لیے نکالنا چاہیے۔ مناسب عنوان کیا ہے؟", ["کتابوں کے فائدے","بازار","درخت","پانی"], 0],
    ["پیراگراف: پانی ہر جاندار کے لیے ضروری ہے۔ ہم پانی پینے، کھانا پکانے اور صفائی کے لیے استعمال کرتے ہیں۔ پانی ضائع کرنے سے قلت پیدا ہوتی ہے۔ ہمیں پانی احتیاط سے استعمال کرنا چاہیے۔ مناسب عنوان کیا ہے؟", ["پانی کی اہمیت","کھیل","سردی","کتاب"], 0],
    ["پیراگراف: ورزش جسم کو مضبوط اور صحت مند بناتی ہے۔ روزانہ کھیلنے سے دل خوش رہتا ہے۔ ورزش ہمیں سستی سے بچاتی ہے۔ ہمیں ہر روز مناسب ورزش کرنی چاہیے۔ مناسب عنوان کیا ہے؟", ["ورزش کے فائدے","تعلیم","بارش","سفر"], 0],
    ["پیراگراف: کسان ہمارے لیے اناج اور سبزیاں اگاتا ہے۔ وہ کھیتوں میں سخت محنت کرتا ہے۔ اس کی محنت سے ہمارے گھروں میں کھانا پہنچتا ہے۔ ہمیں کسان کی عزت کرنی چاہیے۔ مناسب عنوان کیا ہے؟", ["کسان کی اہمیت","شہر","اسکول","دریا"], 0],
    ["پیراگراف: سورج ہمیں روشنی اور حرارت دیتا ہے۔ صبح سورج نکلنے سے دن شروع ہوتا ہے۔ پودوں کی نشوونما کے لیے سورج کی روشنی ضروری ہے۔ سورج کے بغیر زندگی بہت مشکل ہو جائے گی۔ مناسب عنوان کیا ہے؟", ["سورج کی اہمیت","چاند","بارش","درخت"], 0],
    ["پیراگراف: ماں اپنے بچوں سے بہت محبت کرتی ہے۔ وہ ان کی دیکھ بھال اور تربیت کرتی ہے۔ ماں مشکل وقت میں بھی بچوں کا ساتھ دیتی ہے۔ ہمیں اپنی ماں کا احترام اور خیال رکھنا چاہیے۔ مناسب عنوان کیا ہے؟", ["ماں کی محبت","دوستی","کھیل","بازار"], 0],
    ["پیراگراف: وقت بہت قیمتی دولت ہے۔ جو طالب علم وقت پر پڑھتا اور کام کرتا ہے وہ کامیاب ہوتا ہے۔ وقت ضائع کرنے سے نقصان ہوتا ہے۔ ہمیں ہر کام وقت پر کرنا چاہیے۔ مناسب عنوان کیا ہے؟", ["وقت کی پابندی","سیر و تفریح","جانور","کھانا"], 0]
  ]),

  "پیراگراف پڑھ کر سوال کا جواب دینا": makeMCQs([
    ["پیراگراف: علی روزانہ صبح اسکول جاتا ہے۔ سوال: علی کب اسکول جاتا ہے؟", ["رات کو","صبح","شام","دوپہر"], 1],
    ["پیراگراف: ایک کسان کھیت میں گندم اگاتا ہے۔ سوال: کسان کیا اگاتا ہے؟", ["چاول","گندم","پھل","پھول"], 1],
    ["پیراگراف: سارہ کے پاس ایک سفید بلی ہے۔ سوال: بلی کا رنگ کیا ہے؟", ["کالا","سفید","بھورا","سرخ"], 1],
    ["پیراگراف: بارش کے بعد موسم خوشگوار ہوگیا۔ سوال: موسم کب خوشگوار ہوا؟", ["بارش سے پہلے","بارش کے بعد","رات کو","صبح سے پہلے"], 1],
    ["پیراگراف: احمد نے پیاسے کتے کو پانی پلایا۔ سوال: احمد نے کس کو پانی پلایا؟", ["بلی","کتے","پرندے","گائے"], 1],
    ["پیراگراف: باغ میں رنگ برنگے پھول کھلے ہیں۔ سوال: باغ میں کیا کھلا ہے؟", ["پتے","پھول","پھل","بیج"], 1],
    ["پیراگراف: استاد بچوں کو ریاضی پڑھاتے ہیں۔ سوال: استاد کیا پڑھاتے ہیں؟", ["اردو","ریاضی","انگریزی","سائنس"], 1],
    ["پیراگراف: زینب نے اپنی کتاب دوست کو دی۔ سوال: زینب نے کیا دیا؟", ["قلم","کتاب","کھلونا","بیگ"], 1],
    ["پیراگراف: پرندے درخت پر گھونسلہ بناتے ہیں۔ سوال: پرندے گھونسلہ کہاں بناتے ہیں؟", ["پانی میں","درخت پر","زمین کے اندر","گھر میں"], 1],
    ["پیراگراف: ہم سب کو سچ بولنا چاہیے۔ سوال: ہمیں کیا بولنا چاہیے؟", ["جھوٹ","سچ","خاموشی","بے معنی بات"], 1]
  ])
};

console.log("Class 4 and Class 5 questions loaded.");

window.QUESTIONS_DATA[4].English["Comprehension"]=[
{question:"Passage: Ayesha lives near a school. Every morning, she walks to school with her brother. She keeps her books in a blue bag. Her favourite subject is English.\nQuestion: How does Ayesha go to school?",options:["Ayesha walks to school with her brother every morning.","Ayesha goes to school by train.","Ayesha goes alone at night.","Ayesha rides a horse to school."],answer:0},
{question:"Passage: The school garden has many flowers. The students water the plants on Friday. Their teacher tells them to protect the trees. The garden looks beautiful and clean.\nQuestion: When do students water the plants?",options:["The students water the plants on Friday.","They water plants every night.","They water plants on Monday only.","They never water the plants."],answer:0},
{question:"Passage: Hamza found a wallet near the playground. He gave it to his teacher. The teacher found the owner and returned the wallet. Hamza felt proud of his honesty.\nQuestion: What did Hamza do with the wallet?",options:["Hamza gave the wallet to his teacher to return it to its owner.","Hamza kept it for himself.","Hamza threw it away.","Hamza bought a new wallet."],answer:0},
{question:"Passage: It was a cold winter morning. Noor wore a warm coat and gloves. She helped her grandmother prepare tea. They sat together and enjoyed the morning.\nQuestion: How did Noor keep herself warm?",options:["Noor wore a warm coat and gloves.","Noor wore a wet shirt.","Noor sat outside in rain.","Noor opened every window."],answer:0}];
window.QUESTIONS_DATA[5].English["Comprehension"]=[
{question:"Passage: The city library opens at nine in the morning. Students visit it to read books and complete their homework. The librarian keeps books arranged on shelves. Everyone must remain quiet inside.\nQuestion: Why do students visit the library?",options:["Students visit to read books and complete their homework.","Students visit to play loud games.","Students visit to buy vegetables.","Students visit to watch football."],answer:0},
{question:"Passage: On Saturday, Zain and his family visited a farm. They saw cows, goats, and hens. Zain helped the farmer collect eggs. Before leaving, the family bought fresh vegetables.\nQuestion: What did Zain help collect?",options:["Zain helped the farmer collect eggs.","He collected stones.","He collected school notebooks.","He collected flowers from the road."],answer:0},
{question:"Passage: Trees are important for our environment. They provide shade and fruits and help clean the air. Birds build nests in their branches. We should plant more trees and take care of them.\nQuestion: How do trees help the environment?",options:["Trees provide shade and fruits and help clean the air.","Trees make the air dirty.","Trees stop birds building nests.","Trees provide plastic items."],answer:0},
{question:"Passage: Sana wanted to improve her reading. She read a story for twenty minutes every day. She wrote new words in her notebook and learned their meanings. After a month, she could read more confidently.\nQuestion: How did Sana improve her reading?",options:["Sana practiced reading daily and learned new words in her notebook.","Sana stopped reading stories.","Sana watched television every day.","Sana threw away her notebook."],answer:0}];console.log("Class 4/5 comprehension patched.");
window.QUESTIONS_DATA[4].English["Comprehension"]=[{question:"Passage: Ayesha lives near a school. Every morning, she walks to school with her brother. She keeps her books in a blue bag. Her favourite subject is English. Question: How does Ayesha go to school?",options:["Ayesha walks to school with her brother every morning.","Ayesha goes by train.","Ayesha goes alone at night.","Ayesha rides a horse."],answer:0},{question:"Passage: Students water the school garden on Friday. Their teacher asks them to protect the trees. The garden looks beautiful. Question: When do students water plants?",options:["The students water the plants on Friday.","They water plants every night.","They water on Monday only.","They never water plants."],answer:0},{question:"Passage: Hamza found a wallet near the playground. He gave it to his teacher, who returned it to its owner. Hamza felt proud. Question: What did Hamza do with the wallet?",options:["Hamza gave the wallet to his teacher so it could be returned.","Hamza kept it.","Hamza threw it away.","Hamza bought a new wallet."],answer:0},{question:"Passage: Noor wore a warm coat and gloves on a cold winter morning. She helped her grandmother prepare tea. Question: How did Noor keep warm?",options:["Noor wore a warm coat and gloves.","Noor wore a wet shirt.","Noor sat in the rain.","Noor opened every window."],answer:0}];
window.QUESTIONS_DATA[5].English["Comprehension"]=[{question:"Passage: The city library opens at nine. Students visit it to read books and complete homework. The librarian arranges books on shelves. Everyone must remain quiet. Question: Why do students visit the library?",options:["Students visit to read books and complete their homework.","Students visit to play loud games.","Students visit to buy vegetables.","Students visit to watch football."],answer:0},{question:"Passage: Zain and his family visited a farm. They saw cows, goats, and hens. Zain helped the farmer collect eggs. The family bought vegetables before leaving. Question: What did Zain help collect?",options:["Zain helped the farmer collect eggs.","He collected stones.","He collected notebooks.","He collected flowers."],answer:0},{question:"Passage: Trees provide shade and fruits and help clean the air. Birds build nests in their branches. We should plant and protect trees. Question: How do trees help the environment?",options:["Trees provide shade and fruits and help clean the air.","Trees make air dirty.","Trees stop birds building nests.","Trees provide plastic."],answer:0},{question:"Passage: Sana read a story for twenty minutes daily. She wrote new words in her notebook and learned their meanings. After a month, she read confidently. Question: How did Sana improve her reading?",options:["Sana practiced reading daily and learned new words in her notebook.","Sana stopped reading.","Sana watched television daily.","Sana threw away her notebook."],answer:0}];
console.log("Comprehension passages refreshed.");