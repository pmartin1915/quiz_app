// NUR 622 Exam 1 Question Bank
// 110 Clinical Vignette Questions
// Categories: OB, GYN, GU, STI, Contraception, Diagnostic Testing
var EXAM1_DATA = {
  questions: [
  {
    "id": 1,
    "category": "OB",
    "subcategory": "Preconception Care",
    "stem": "A 30-year-old woman with no significant medical history presents for a preconception visit. She plans to start trying to conceive in the next few months. She has no history of neural tube defects. What is the recommended daily folic acid supplementation for this patient?",
    "options": [
      "400-800 mcg/day",
      "1000 mcg/day",
      "4 mg/day",
      "No supplementation needed until pregnancy is confirmed"
    ],
    "correct": 0,
    "explanation": "For average-risk women planning pregnancy, the recommended folic acid dose is 400-800 mcg/day, started at least 1 month before conception to prevent neural tube defects. The 1000 mcg dose (option B) is recommended for women of advanced maternal age. The 4 mg dose (option C) is reserved for women with a prior pregnancy affected by a neural tube defect. Waiting until pregnancy is confirmed (option D) is incorrect because the neural tube closes by 28 days, often before a woman knows she is pregnant.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "category": "OB",
    "subcategory": "Preconception Care",
    "stem": "A 38-year-old woman presents for preconception counseling. She has well-controlled type 2 diabetes and plans to conceive. She has no history of neural tube defects. What folic acid dose should the FNP recommend?",
    "options": [
      "200 mcg/day",
      "400 mcg/day",
      "1000 mcg/day",
      "4 mg/day"
    ],
    "correct": 2,
    "explanation": "Women of advanced maternal age (35 and older) should take 1000 mcg/day of folic acid for preconception supplementation. The standard 400-800 mcg dose is for average-risk women. The 4 mg dose is specifically for women with a history of a prior neural tube defect-affected pregnancy, not for advanced maternal age alone. Additionally, her diabetes should be optimized before conception to reduce the risk of congenital anomalies.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 3,
    "category": "OB",
    "subcategory": "Preconception Care",
    "stem": "A 27-year-old woman presents for a preconception visit. She is up to date on her flu shot but unsure about other immunizations. Which of the following vaccines should be administered BEFORE conception rather than during pregnancy?",
    "options": [
      "Influenza (inactivated)",
      "Tdap",
      "MMR (Measles, Mumps, Rubella)",
      "COVID-19 mRNA vaccine"
    ],
    "correct": 2,
    "explanation": "MMR is a live vaccine and is contraindicated during pregnancy. It should be given before conception, with the recommendation to wait at least 4 weeks after vaccination before attempting to conceive. Rubella immunity is particularly important because rubella infection during pregnancy can cause congenital rubella syndrome. Inactivated influenza (option A) and Tdap (option B) can be safely given during pregnancy. Tdap is specifically recommended during each pregnancy at 27-36 weeks gestation.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 4,
    "category": "OB",
    "subcategory": "Prenatal Screening",
    "stem": "A 29-year-old primigravida at her first prenatal visit asks about screening tests during pregnancy. At what gestational age should she be screened for gestational diabetes mellitus?",
    "options": [
      "8-12 weeks",
      "16-20 weeks",
      "24-28 weeks",
      "32-36 weeks"
    ],
    "correct": 2,
    "explanation": "Gestational diabetes mellitus (GDM) screening is performed at 24-28 weeks gestation using the glucose challenge test. This timeframe is chosen because placental hormones that cause insulin resistance are most active during this period. Earlier screening (options A and B) may miss GDM that develops later. Later screening (option D) would delay diagnosis and management. Women with high-risk factors (obesity, prior GDM, family history) may be screened earlier at the initial visit, but the standard screening is at 24-28 weeks.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "category": "OB",
    "subcategory": "Prenatal Screening",
    "stem": "A 32-year-old woman at 34 weeks gestation asks when she will be tested for Group B Streptococcus (GBS). What is the recommended timeframe for GBS screening in pregnancy?",
    "options": [
      "24-28 weeks",
      "28-32 weeks",
      "35-36 weeks",
      "At the onset of labor only"
    ],
    "correct": 2,
    "explanation": "Group B Streptococcus (GBS) screening via vaginal-rectal swab culture is recommended at 35-36 weeks gestation. GBS colonization can be transient, so screening too early may not reflect colonization status at the time of delivery. If positive, intrapartum antibiotic prophylaxis is given during labor to prevent neonatal GBS disease. Screening at 24-28 weeks (option A) is too early and is the timeframe for GDM screening. Testing only at labor onset (option D) delays results.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 6,
    "category": "OB",
    "subcategory": "Prenatal Care",
    "stem": "A 31-year-old Rh-negative primigravida is at her 28-week prenatal visit. Her antibody screen is negative. The father of the baby is Rh-positive. What is the most appropriate next step?",
    "options": [
      "Repeat antibody screen at 36 weeks",
      "Administer RhoGAM (Rh immunoglobulin) now at 28 weeks",
      "No intervention needed until delivery",
      "Schedule amniocentesis to determine fetal blood type"
    ],
    "correct": 1,
    "explanation": "RhoGAM (Rh immunoglobulin) is administered at 28 weeks gestation to Rh-negative mothers with a negative antibody screen to prevent Rh isoimmunization. This prevents the mother from developing antibodies against fetal Rh-positive red blood cells that may cross the placenta. A second dose is given within 72 hours after delivery if the newborn is confirmed Rh-positive. Waiting until delivery (option C) risks sensitization. Amniocentesis (option D) is invasive and unnecessary when prophylaxis is available.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "category": "OB",
    "subcategory": "Prenatal Care",
    "stem": "A 25-year-old woman at 30 weeks gestation presents for a routine prenatal visit. A urine dipstick shows 2+ protein. Her blood pressure today is 148/96 mmHg, up from her baseline of 118/72. She reports a new-onset headache. Which of the following is the most likely diagnosis?",
    "options": [
      "Gestational hypertension",
      "Chronic hypertension",
      "Preeclampsia",
      "Urinary tract infection"
    ],
    "correct": 2,
    "explanation": "This patient meets the criteria for preeclampsia: new-onset hypertension (BP ≥140/90) after 20 weeks gestation PLUS proteinuria. Her baseline BP was normal, ruling out chronic hypertension (option B). Gestational hypertension (option A) is defined as new BP ≥140/90 after 20 weeks WITHOUT proteinuria, but this patient has 2+ protein. The headache is also concerning as a possible severe feature of preeclampsia. UTI (option D) would not explain the hypertension. This patient should be referred immediately for further evaluation.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 8,
    "category": "OB",
    "subcategory": "Pregnancy Complications",
    "stem": "A 33-year-old woman at 35 weeks gestation presents to the clinic with a severe headache, visual changes (seeing spots), and right upper quadrant pain. Her BP is 168/112 mmHg. What is the most appropriate action by the FNP?",
    "options": [
      "Prescribe acetaminophen for the headache and recheck BP in 1 week",
      "Order a 24-hour urine collection and follow up in 3 days",
      "Refer immediately to the emergency department for evaluation of preeclampsia with severe features",
      "Start oral labetalol and schedule a follow-up in 48 hours"
    ],
    "correct": 2,
    "explanation": "This patient has multiple red flags for preeclampsia with severe features: BP ≥160/110, severe headache, visual changes, and right upper quadrant pain (suggesting hepatic involvement/HELLP syndrome). This is a medical emergency requiring immediate referral. Prescribing acetaminophen alone (option A) misses a life-threatening diagnosis. A 24-hour urine collection (option B) delays urgent evaluation. Outpatient labetalol (option D) is insufficient for this level of severity. Preeclampsia with severe features requires urgent maternal-fetal evaluation, possible magnesium sulfate for seizure prophylaxis, and delivery planning.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 9,
    "category": "OB",
    "subcategory": "Pregnancy Complications",
    "stem": "A 28-year-old woman presents at 7 weeks gestation with sharp, unilateral lower abdominal pain and light vaginal spotting. She has a history of pelvic inflammatory disease treated 3 years ago. Her serum beta-hCG is positive but lower than expected for gestational age. Transvaginal ultrasound shows an empty uterus. What is the most likely diagnosis?",
    "options": [
      "Threatened abortion",
      "Ectopic pregnancy",
      "Complete spontaneous abortion",
      "Gestational trophoblastic disease"
    ],
    "correct": 1,
    "explanation": "This presentation is classic for ectopic pregnancy: positive pregnancy test, unilateral abdominal pain, vaginal spotting, lower-than-expected beta-hCG, and an empty uterus on ultrasound. Her history of PID is a significant risk factor (along with prior ectopic, infertility, and tubal surgery). This requires immediate referral. A threatened abortion (option A) would show an intrauterine pregnancy on ultrasound. A complete spontaneous abortion (option C) would have a declining beta-hCG. Gestational trophoblastic disease (option D) would show a higher-than-expected beta-hCG and a characteristic 'snowstorm' pattern on ultrasound.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 10,
    "category": "OB",
    "subcategory": "Pregnancy Complications",
    "stem": "A 34-year-old woman at 32 weeks gestation presents with sudden onset of painless, bright red vaginal bleeding. She denies abdominal pain or cramping. Fetal heart tones are reassuring. Which condition should be suspected, and what is a key management consideration?",
    "options": [
      "Placental abruption; perform immediate digital cervical exam",
      "Placenta previa; avoid digital cervical exam",
      "Cervical insufficiency; perform cervical cerclage",
      "Bloody show; reassure and monitor at home"
    ],
    "correct": 1,
    "explanation": "Painless, bright red vaginal bleeding in the third trimester is the hallmark of placenta previa (P = Painless). The key management principle is to AVOID digital cervical examination, as this can disrupt the placenta overlying the cervical os and cause life-threatening hemorrhage. Diagnosis is confirmed by ultrasound. Placental abruption (option A) presents with PAINFUL bleeding (A = Agonizing) and a rigid, tender uterus. Cervical insufficiency (option C) typically presents in the second trimester with painless cervical dilation. Bloody show (option D) is a small amount of mucoid bloody discharge, not bright red bleeding.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "category": "OB",
    "subcategory": "Pregnancy Complications",
    "stem": "A 29-year-old woman at 34 weeks gestation presents with severe abdominal pain and dark red vaginal bleeding. Her abdomen is rigid and tender on palpation. She reports that the pain was sudden in onset. Fetal heart rate monitoring shows decelerations. Which of the following is the most likely diagnosis?",
    "options": [
      "Placenta previa",
      "Placental abruption",
      "Uterine rupture",
      "Cervical polyp"
    ],
    "correct": 1,
    "explanation": "Placental abruption presents with sudden-onset severe abdominal pain (A = Agonizing), dark red vaginal bleeding, a rigid/tender uterus (board-like), and fetal distress. This is in contrast to placenta previa, which is painless bright red bleeding. Risk factors include hypertension, trauma, cocaine use, and prior abruption. Uterine rupture (option C) is rare and typically occurs in women with prior cesarean scars during labor. A cervical polyp (option D) causes minimal painless bleeding and would not explain the abdominal rigidity or fetal distress. This is an emergency requiring immediate referral.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 12,
    "category": "OB",
    "subcategory": "Pregnancy Management",
    "stem": "A 26-year-old primigravida at 8 weeks gestation presents with persistent nausea and vomiting that occurs primarily in the morning but sometimes throughout the day. She is tolerating some oral fluids and has not lost weight. What is the most appropriate first-line treatment?",
    "options": [
      "Ondansetron (Zofran)",
      "Vitamin B6 (pyridoxine)",
      "Metoclopramide",
      "Prochlorperazine"
    ],
    "correct": 1,
    "explanation": "Vitamin B6 (pyridoxine) is the recommended first-line treatment for nausea and vomiting in pregnancy. A practical approach is B6 combined with doxylamine (Unisom) at bedtime. Ondansetron (option A) is reserved for refractory cases due to potential safety concerns in the first trimester. Metoclopramide (option C) and prochlorperazine (option D) are second-line options. If the patient cannot tolerate oral intake or is losing weight, she should be evaluated for hyperemesis gravidarum, which may require IV fluids and hospitalization.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 13,
    "category": "OB",
    "subcategory": "Pregnancy Management",
    "stem": "A 24-year-old woman at 20 weeks gestation is found to have a hemoglobin of 9.8 g/dL and a low ferritin level, consistent with iron deficiency anemia. She is prescribed oral iron supplementation. What dietary advice should the FNP provide to optimize iron absorption?",
    "options": [
      "Take iron with milk or calcium-rich foods to reduce GI upset",
      "Take iron with Vitamin C (orange juice) to enhance absorption",
      "Take iron with antacids to reduce nausea",
      "Take iron only at bedtime with a full meal"
    ],
    "correct": 1,
    "explanation": "Vitamin C enhances the absorption of non-heme iron from oral supplements. Taking iron with orange juice or another Vitamin C source is a key counseling point. Calcium (option A) and antacids (option C) actually inhibit iron absorption and should be taken at separate times. While taking iron with food may reduce GI upset, it also reduces absorption; taking it on an empty stomach with Vitamin C optimizes absorption. If GI side effects are intolerable, taking it with a small amount of food is acceptable as a compromise.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 14,
    "category": "OB",
    "subcategory": "Pregnancy Management",
    "stem": "A 30-year-old woman at 16 weeks gestation with a history of epilepsy has been taking valproic acid for seizure control. She just found out she is pregnant. Which of the following is the most appropriate action regarding her medication?",
    "options": [
      "Continue valproic acid as stopping it risks seizures",
      "Switch to lamotrigine or levetiracetam (Keppra) after consulting with neurology",
      "Discontinue all seizure medications immediately",
      "Add high-dose folic acid while continuing valproic acid"
    ],
    "correct": 1,
    "explanation": "Valproic acid is a known teratogen associated with neural tube defects, craniofacial abnormalities, and neurodevelopmental delays. It should be switched to a safer alternative such as lamotrigine or levetiracetam (Keppra) in collaboration with the patient's neurologist. Continuing valproic acid (option A) exposes the fetus to ongoing teratogenic risk. Discontinuing all medications (option C) puts the mother at risk for uncontrolled seizures, which is also dangerous during pregnancy. Adding folic acid alone (option D) does not eliminate the teratogenic risk of valproic acid.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 15,
    "category": "OB",
    "subcategory": "Medications in Pregnancy",
    "stem": "A 28-year-old woman at 12 weeks gestation develops a urinary tract infection. She has no drug allergies. Using the PREG SAFE mnemonic for pregnancy-safe medications, which of the following antibiotics is safe to prescribe?",
    "options": [
      "Ciprofloxacin",
      "Doxycycline",
      "Nitrofurantoin (Macrobid)",
      "Trimethoprim (first trimester)"
    ],
    "correct": 2,
    "explanation": "Nitrofurantoin (Macrobid) is considered safe in pregnancy for UTI treatment (avoid near term/delivery). The PREG SAFE mnemonic includes: Penicillin, Rocephin (Ceftriaxone), Erythromycin, Gentamicin, Safe: Acetaminophen, Azithromycin, Flagyl (Metronidazole), and macrolidEs. Ciprofloxacin (option A) is a fluoroquinolone that may affect fetal cartilage development. Doxycycline (option B) is a tetracycline contraindicated in pregnancy due to tooth and bone effects. Trimethoprim (option D) is an antifolate and should be avoided in the first trimester.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "category": "OB",
    "subcategory": "Medications in Pregnancy",
    "stem": "A 35-year-old woman at 10 weeks gestation with chronic hypertension has been well-controlled on lisinopril 10 mg daily. She presents for her first prenatal visit. What is the most appropriate action regarding her antihypertensive medication?",
    "options": [
      "Continue lisinopril as her blood pressure is well-controlled",
      "Discontinue lisinopril and switch to a pregnancy-safe antihypertensive such as labetalol or nifedipine",
      "Reduce lisinopril dose to 5 mg daily",
      "Add methyldopa and continue lisinopril"
    ],
    "correct": 1,
    "explanation": "ACE inhibitors (such as lisinopril) are contraindicated in pregnancy due to the risk of fetal renal agenesis, oligohydramnios, and other congenital anomalies, particularly in the second and third trimesters. The medication should be switched to a pregnancy-safe alternative such as labetalol (beta-blocker) or nifedipine (calcium channel blocker). Continuing lisinopril at any dose (options A and C) is unsafe. Adding methyldopa while continuing the ACE inhibitor (option D) does not eliminate the teratogenic risk.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 17,
    "category": "OB",
    "subcategory": "Postpartum Care",
    "stem": "A 32-year-old woman presents 3 weeks postpartum reporting persistent sadness, difficulty bonding with her newborn, poor appetite, insomnia, and feelings of guilt about not being a good mother. She denies suicidal ideation or thoughts of harming her baby. She is breastfeeding. Symptoms have been present for 2 weeks. What is the most appropriate first-line pharmacologic treatment?",
    "options": [
      "Alprazolam (Xanax) for anxiety",
      "Sertraline (Zoloft)",
      "Lithium",
      "No medication needed; refer for counseling only"
    ],
    "correct": 1,
    "explanation": "This patient has postpartum depression (PPD), which affects up to 15% of women. Sertraline (an SSRI) is the first-line pharmacologic treatment for PPD and is considered compatible with breastfeeding. All postpartum patients should be screened for depression. Alprazolam (option A) is a benzodiazepine that is not first-line for depression and has addiction potential. Lithium (option C) is used for bipolar disorder and requires close monitoring; it is not first-line for PPD. While counseling (option D) is beneficial, this patient's symptoms warrant pharmacologic treatment in addition to psychotherapy.",
    "source": "OB Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 18,
    "category": "OB",
    "subcategory": "Postpartum Care",
    "stem": "A 28-year-old breastfeeding woman presents 2 weeks postpartum with a painful, erythematous, warm area on her left breast. She has a fever of 101.5F (38.6C) and flu-like symptoms. On examination, a wedge-shaped area of induration and erythema is noted in the upper outer quadrant of the left breast. What is the most appropriate management?",
    "options": [
      "Discontinue breastfeeding from the affected breast and apply cold compresses",
      "Prescribe antibiotics (dicloxacillin or cephalexin) and continue breastfeeding from both breasts",
      "Refer for immediate incision and drainage",
      "Prescribe antifungal medication for suspected candidal mastitis"
    ],
    "correct": 1,
    "explanation": "This presentation is classic for lactational mastitis: unilateral breast pain, erythema, warmth, fever, and flu-like symptoms in a breastfeeding woman. Treatment includes antibiotics effective against Staphylococcus aureus (dicloxacillin or cephalexin) AND continued breastfeeding from both breasts. Continuing to breastfeed helps drain the breast and actually promotes healing. Stopping breastfeeding (option A) can worsen the condition by causing engorgement and potential abscess formation. Incision and drainage (option C) is only indicated if an abscess has formed. Antifungal medication (option D) is not indicated for bacterial mastitis.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "category": "OB",
    "subcategory": "Postpartum Complications",
    "stem": "A 30-year-old woman presents 5 days after a cesarean delivery with fever of 102F (38.9C), lower abdominal pain, and foul-smelling lochia. On examination, her uterus is tender and boggy. What is the most likely diagnosis?",
    "options": [
      "Normal postpartum course",
      "Postpartum endometritis",
      "Urinary tract infection",
      "Wound infection"
    ],
    "correct": 1,
    "explanation": "Postpartum endometritis is an infection of the uterine lining, presenting with fever, lower abdominal pain, uterine tenderness, and foul-smelling lochia. Cesarean delivery is the most significant risk factor, increasing the risk significantly compared to vaginal delivery. This requires antibiotic treatment. A normal postpartum course (option A) would not include high fever and foul-smelling discharge. While UTI (option C) can cause fever postpartum, it would not explain the uterine tenderness and foul lochia. A wound infection (option D) would present with local erythema at the incision site, not uterine symptoms.",
    "source": "OB Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "category": "OB",
    "subcategory": "Prenatal Care",
    "stem": "A 26-year-old primigravida at 32 weeks gestation has a routine urine dipstick that shows 1+ glucose. She had a normal glucose challenge test at 26 weeks. She denies polyuria, polydipsia, or fatigue. What is the most appropriate next step?",
    "options": [
      "Repeat the glucose challenge test immediately",
      "Start insulin therapy",
      "Reassure the patient; trace glycosuria can be normal in pregnancy due to changes in renal threshold",
      "Order a hemoglobin A1c"
    ],
    "correct": 2,
    "explanation": "Mild glycosuria (1+ glucose on dipstick) can be a normal finding in pregnancy due to the physiological decrease in the renal threshold for glucose. Since this patient had a normal glucose challenge test at 26 weeks (within the recommended 24-28 week window), she has already been appropriately screened for gestational diabetes. Repeating the test (option A) is not necessary with a recent normal result. Starting insulin (option B) is premature without a diabetes diagnosis. A hemoglobin A1c (option D) is not the standard screening tool for gestational diabetes. If the dipstick showed 2+ or higher glucose, further evaluation would be warranted.",
    "source": "OB Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 21,
    "category": "GYN",
    "subcategory": "BV vs Candida vs Trichomoniasis",
    "stem": "A 28-year-old woman presents to the clinic complaining of a thin, grayish-white vaginal discharge with a strong fishy odor that worsens after unprotected intercourse. On examination, the vaginal pH is 5.0. A KOH whiff test is positive. Wet mount shows clue cells. Which of the following is the most likely diagnosis?",
    "options": [
      "Bacterial vaginosis",
      "Vulvovaginal candidiasis",
      "Trichomoniasis",
      "Chlamydial cervicitis"
    ],
    "correct": 0,
    "explanation": "Bacterial vaginosis (BV) classically presents with a thin, gray-white discharge, fishy odor (especially after intercourse or with KOH), elevated vaginal pH (>4.5), positive KOH whiff test, and clue cells on wet mount. These findings satisfy the Amsel criteria (need 3 of 4: homogeneous discharge, pH >4.5, positive whiff test, clue cells). Vulvovaginal candidiasis would present with thick, white cottage-cheese discharge and pruritus, not a fishy odor. Trichomoniasis presents with frothy yellow-green discharge and strawberry cervix, which are absent here.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 22,
    "category": "GYN",
    "subcategory": "BV vs Candida vs Trichomoniasis",
    "stem": "A 32-year-old woman presents with intense vulvar itching and a thick, white, cottage cheese-like vaginal discharge for the past 5 days. She recently completed a 10-day course of amoxicillin for a sinus infection. Vaginal pH is 4.2. KOH whiff test is negative. KOH prep shows budding yeast and pseudohyphae. What is the most appropriate treatment?",
    "options": [
      "Metronidazole 500 mg PO BID for 7 days",
      "Fluconazole 150 mg PO single dose",
      "Metronidazole 2 g PO single dose plus partner treatment",
      "Doxycycline 100 mg PO BID for 7 days"
    ],
    "correct": 1,
    "explanation": "This presentation is classic for vulvovaginal candidiasis: thick, white cottage cheese-like discharge, intense pruritus, normal vaginal pH (<4.5), negative whiff test, and budding yeast with pseudohyphae on KOH prep. Recent antibiotic use is a common risk factor. The appropriate treatment is Fluconazole 150 mg PO as a single dose. Metronidazole 500 mg BID for 7 days is the treatment for bacterial vaginosis. Metronidazole 2 g single dose with partner treatment is the regimen for trichomoniasis. Doxycycline is used for chlamydia or PID, not yeast infections.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 23,
    "category": "GYN",
    "subcategory": "BV vs Candida vs Trichomoniasis",
    "stem": "A 25-year-old sexually active woman presents with a profuse, frothy, yellow-green vaginal discharge and vulvar irritation. She also reports dysuria. On speculum examination, the cervix appears erythematous with punctate hemorrhages. Wet mount reveals motile, flagellated organisms. Vaginal pH is 6.0. Which of the following is the most appropriate management?",
    "options": [
      "Fluconazole 150 mg PO single dose for the patient only",
      "Metronidazole 500 mg PO BID for 7 days for the patient only",
      "Metronidazole 2 g PO single dose for the patient and her sexual partner",
      "Clindamycin cream intravaginally for 7 days"
    ],
    "correct": 2,
    "explanation": "This presentation is classic for trichomoniasis: frothy yellow-green discharge, vulvar irritation, dysuria, strawberry cervix (punctate hemorrhages on the cervix), motile flagellated trichomonads on wet mount, and elevated vaginal pH (>4.5). Trichomoniasis is a sexually transmitted infection, so the patient AND her partner must both be treated with Metronidazole. Treating only the patient (option B) would lead to reinfection. Fluconazole treats candidiasis, and clindamycin cream is an alternative BV treatment -- neither addresses trichomoniasis.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 24,
    "category": "GYN",
    "subcategory": "BV vs Candida vs Trichomoniasis",
    "stem": "A 30-year-old woman presents with vaginal discharge. She denies pruritus but notes a mild odor. On examination, a thin, homogeneous, grayish discharge coats the vaginal walls. Vaginal pH is 5.2. The KOH whiff test is positive. Wet mount shows epithelial cells with obscured borders due to adherent bacteria, but no motile organisms or pseudohyphae. Which criterion is NOT part of the Amsel criteria for diagnosing this condition?",
    "options": [
      "Vaginal pH greater than 4.5",
      "Positive KOH whiff test",
      "Presence of clue cells on wet mount",
      "Cervical motion tenderness on bimanual exam"
    ],
    "correct": 3,
    "explanation": "The patient has bacterial vaginosis (BV), diagnosed using the Amsel criteria. The four Amsel criteria are: (1) thin, homogeneous gray-white discharge, (2) vaginal pH >4.5, (3) positive KOH whiff test (fishy amine odor), and (4) clue cells on wet mount (epithelial cells with obscured borders from adherent bacteria). At least 3 of 4 criteria must be met. Cervical motion tenderness (chandelier sign) is NOT part of the Amsel criteria -- it is a hallmark finding of pelvic inflammatory disease (PID).",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "category": "GYN",
    "subcategory": "BV vs Candida vs Trichomoniasis",
    "stem": "A 22-year-old college student presents with vaginal discharge and mild vulvar irritation. She has had two new sexual partners in the past 3 months and uses condoms inconsistently. On examination, the discharge is thin and slightly off-white with a faint odor. Vaginal pH is 5.5. KOH whiff test is weakly positive. Wet mount shows both clue cells and a few motile, flagellated organisms. Which of the following best describes this clinical scenario?",
    "options": [
      "Bacterial vaginosis alone requiring metronidazole for 7 days",
      "Trichomoniasis alone requiring fluconazole single dose",
      "Co-infection with BV and trichomoniasis requiring metronidazole and partner treatment",
      "Vulvovaginal candidiasis requiring topical clotrimazole"
    ],
    "correct": 2,
    "explanation": "This patient has evidence of both BV (clue cells, elevated pH, positive whiff test) and trichomoniasis (motile flagellated organisms on wet mount). Co-infections are common in sexually active women with multiple partners. Metronidazole treats both BV and trichomoniasis, but the critical management point is that the sexual partner must also be treated because trichomoniasis is an STI. Option A misses the trichomoniasis diagnosis and the need for partner treatment. Option B incorrectly identifies the pathogen and prescribes fluconazole, which is for candidiasis. Option D is incorrect because candidiasis presents with cottage cheese discharge and pseudohyphae, not what is described here.",
    "source": "GYN Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 26,
    "category": "GYN",
    "subcategory": "Cervical Cancer Screening",
    "stem": "A healthy 24-year-old woman presents for her annual well-woman examination. She has no significant medical history and is sexually active. Her last Pap smear was performed 2 years ago and was normal. According to current USPSTF guidelines, what is the most appropriate cervical cancer screening recommendation for this patient?",
    "options": [
      "Repeat Pap smear now since it has been 2 years",
      "Pap smear with hrHPV co-testing every 5 years",
      "Repeat Pap smear at age 25, which will be 3 years since her last normal Pap",
      "No screening is needed until age 30"
    ],
    "correct": 2,
    "explanation": "Per USPSTF guidelines, women aged 21-29 should be screened with a Pap smear alone every 3 years. This patient is 24, had a normal Pap 2 years ago, so her next Pap is due in 1 year (at age 25, which is 3 years from her last Pap). Option A is too early -- screening every 2 years is more frequent than recommended. Option B (co-testing with hrHPV every 5 years) is appropriate for women aged 30-65, not for women under 30. Option D is incorrect because screening begins at age 21, not age 30.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 27,
    "category": "GYN",
    "subcategory": "Cervical Cancer Screening",
    "stem": "A 35-year-old woman presents for cervical cancer screening. She has had consistently normal Pap smears since age 21. She asks about her screening options. According to current USPSTF guidelines, which of the following is an acceptable screening strategy for this patient?",
    "options": [
      "Pap smear alone every year",
      "hrHPV testing alone every 5 years",
      "No further screening is needed if she has had 3 consecutive normal Paps",
      "Pap smear alone every 5 years"
    ],
    "correct": 1,
    "explanation": "For women aged 30-65, the USPSTF recommends three acceptable screening strategies: (1) Pap smear alone every 3 years, (2) hrHPV testing alone every 5 years, or (3) Pap/hrHPV co-testing every 5 years. Option B (hrHPV testing alone every 5 years) is one of these approved strategies. Option A (annual Pap) is too frequent and not recommended. Option C is incorrect because screening should continue until age 65 (with adequate prior screening). Option D (Pap alone every 5 years) is not recommended -- Pap alone should be done every 3 years, not 5.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "category": "GYN",
    "subcategory": "Cervical Cancer Screening",
    "stem": "A 68-year-old woman presents for a well-woman visit. She had regular cervical cancer screenings throughout her life, with her last three Pap smears (at ages 59, 62, and 65) all reported as normal. She had a total hysterectomy 5 years ago for uterine fibroids (benign). She asks if she still needs cervical cancer screening. What is the most appropriate recommendation?",
    "options": [
      "Continue Pap smears every 3 years indefinitely",
      "Switch to hrHPV testing alone every 5 years",
      "No further cervical cancer screening is recommended",
      "Perform one final Pap with hrHPV co-test to confirm she can stop"
    ],
    "correct": 2,
    "explanation": "Per USPSTF guidelines, cervical cancer screening can be discontinued after age 65 in women who have had adequate prior screening (defined as three consecutive normal Paps or two consecutive normal co-tests within the prior 10 years, with the most recent within 5 years). This patient meets this criterion with three normal Paps. Additionally, she had a total hysterectomy for benign disease, which is another independent reason to discontinue screening (no cervix remains). Options A and B recommend unnecessary continued screening. Option D is not a standard recommendation -- her adequate screening history suffices.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 29,
    "category": "GYN",
    "subcategory": "Amenorrhea",
    "stem": "A 16-year-old girl is brought to the clinic by her mother because she has not yet started her menstrual period. She has well-developed breasts (Tanner stage IV) and pubic hair. Her height and weight are within normal limits. She denies sexual activity, excessive exercise, or recent weight changes. Physical examination reveals normal external genitalia. Which of the following is the most appropriate first step in the workup?",
    "options": [
      "Urine pregnancy test (HCG)",
      "Karyotype analysis",
      "Pelvic MRI",
      "Start empiric oral contraceptive pills"
    ],
    "correct": 0,
    "explanation": "This patient has primary amenorrhea, defined as no menses by age 15 (or by age 13 without secondary sexual characteristics). Even though the patient denies sexual activity, a urine pregnancy test (HCG) is always the first step in any amenorrhea workup because pregnancy is the most common cause of amenorrhea and patients may not disclose sexual activity. The standard workup then includes TSH, prolactin, FSH, and pelvic ultrasound. Karyotype analysis (option B) may be indicated later if Turner syndrome is suspected, but is not the first step. Pelvic MRI (option C) is premature. Starting OCPs (option D) without a diagnosis is inappropriate.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "category": "GYN",
    "subcategory": "Amenorrhea",
    "stem": "A 26-year-old woman presents because she has not had a menstrual period for the past 8 months. She previously had regular cycles. She denies pregnancy, has a BMI of 23, and is not on any medications. A urine pregnancy test is negative. TSH is 8.2 mIU/L (normal 0.5-4.5), prolactin is within normal limits, and FSH is normal. What is the most likely cause of her secondary amenorrhea?",
    "options": [
      "Premature ovarian insufficiency",
      "Hypothyroidism",
      "Prolactinoma",
      "Polycystic ovary syndrome"
    ],
    "correct": 1,
    "explanation": "This patient has secondary amenorrhea (absence of menses for 6 or more months in a woman who previously had regular cycles). Her TSH is elevated at 8.2 mIU/L, indicating hypothyroidism, which is a well-known cause of menstrual irregularities including amenorrhea. The standard workup for secondary amenorrhea includes HCG (negative here), TSH, prolactin, FSH, and pelvic ultrasound. Premature ovarian insufficiency (option A) would show an elevated FSH, which is normal here. Prolactinoma (option C) would show elevated prolactin. PCOS (option D) typically presents with hyperandrogenism and oligomenorrhea, but TSH abnormality is the clear finding here.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "category": "GYN",
    "subcategory": "Pelvic Pain - Dysmenorrhea",
    "stem": "A 17-year-old nulliparous woman presents with severe crampy lower abdominal pain that begins the day before her menstrual period and lasts 2-3 days. She has had regular cycles since menarche at age 12. The pain is not associated with dyspareunia or abnormal bleeding. Pelvic examination is normal. What is the most appropriate initial treatment?",
    "options": [
      "Laparoscopy for definitive diagnosis",
      "NSAIDs such as ibuprofen, started at onset of menses",
      "Medroxyprogesterone acetate injection",
      "GnRH agonist therapy"
    ],
    "correct": 1,
    "explanation": "This patient has primary dysmenorrhea -- painful menstruation in the absence of pelvic pathology, occurring with normal ovulatory cycles. It typically begins within 1-2 years of menarche and presents with crampy suprapubic pain starting just before or at onset of menses. First-line treatment is NSAIDs (e.g., ibuprofen), which inhibit prostaglandin synthesis. If NSAIDs are insufficient, oral contraceptive pills (OCPs) can be added. Laparoscopy (option A) is not indicated unless secondary dysmenorrhea (e.g., endometriosis) is suspected after failed medical therapy. GnRH agonists (option D) are reserved for endometriosis, not primary dysmenorrhea.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 32,
    "category": "GYN",
    "subcategory": "Pelvic Pain - Endometriosis",
    "stem": "A 29-year-old woman presents with progressively worsening pelvic pain over the past 2 years. She describes deep dyspareunia, painful periods that now require her to miss work, and dyschezia (painful bowel movements) during menses. She and her husband have been attempting to conceive for 14 months without success. Bimanual exam reveals a fixed, retroverted uterus with uterosacral nodularity. What is the most likely diagnosis?",
    "options": [
      "Primary dysmenorrhea",
      "Endometriosis",
      "Pelvic inflammatory disease",
      "Irritable bowel syndrome"
    ],
    "correct": 1,
    "explanation": "This presentation is classic for endometriosis: progressive dysmenorrhea, deep dyspareunia, dyschezia during menses, infertility (>12 months in a woman <35), and physical exam findings of a fixed retroverted uterus with uterosacral nodularity (indicating ectopic endometrial tissue). Endometriosis involves ectopic endometrial tissue outside the uterus, causing chronic pelvic pain and infertility. Primary dysmenorrhea (option A) would not cause progressive worsening, infertility, or physical exam abnormalities. PID (option C) presents acutely with cervical motion tenderness, fever, and purulent discharge. IBS (option D) does not cause dyspareunia or uterosacral nodularity.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 33,
    "category": "GYN",
    "subcategory": "Pelvic Pain - Endometriosis",
    "stem": "A 34-year-old woman with a known history of endometriosis confirmed by laparoscopy 2 years ago presents for follow-up. She has moderate pelvic pain despite taking NSAIDs. She does not desire pregnancy at this time. She asks about long-term management options. Which of the following is the most appropriate next step?",
    "options": [
      "Repeat diagnostic laparoscopy",
      "Combined oral contraceptive pills or levonorgestrel IUD",
      "Expectant management with continued NSAIDs only",
      "Total abdominal hysterectomy with bilateral salpingo-oophorectomy"
    ],
    "correct": 1,
    "explanation": "For endometriosis management in a woman not desiring pregnancy, hormonal suppression is first-line after NSAIDs prove insufficient. Options include combined OCPs (continuous or cyclic), levonorgestrel IUD, or progestins. These suppress endometrial tissue growth and reduce pain. Repeat laparoscopy (option A) is not indicated without failed medical management. Continued NSAIDs alone (option C) is inadequate since she already has persistent pain on NSAIDs. Hysterectomy with BSO (option D) is a last resort for women who have completed childbearing and failed all other treatments -- it is far too aggressive at this stage.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 34,
    "category": "GYN",
    "subcategory": "Breast Conditions",
    "stem": "A 45-year-old premenopausal woman presents with bilateral breast pain and nodularity that worsens before her menstrual period and improves after menses. On examination, both breasts have diffuse, rope-like nodularity more prominent in the upper outer quadrants. There are no discrete dominant masses, skin changes, or nipple discharge. What is the most likely diagnosis?",
    "options": [
      "Invasive ductal carcinoma",
      "Fibrocystic breast changes",
      "Fibroadenoma",
      "Intraductal papilloma"
    ],
    "correct": 1,
    "explanation": "Fibrocystic breast changes are the most common benign breast condition in premenopausal women. They present with bilateral cyclical breast pain and nodularity that worsens premenstrually and improves after menses, with diffuse rope-like texture predominantly in the upper outer quadrants. Invasive ductal carcinoma (option A) typically presents as a painless, hard, fixed mass -- breast pain is usually benign. Fibroadenoma (option C) presents as a single, firm, well-circumscribed, mobile mass ('breast mouse'), not diffuse nodularity. Intraductal papilloma (option D) typically presents with bloody or serous nipple discharge.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 35,
    "category": "GYN",
    "subcategory": "Breast Conditions",
    "stem": "A 58-year-old postmenopausal woman presents with a hard, irregular, painless mass in the right breast that she noticed 2 weeks ago. On examination, the 2.5 cm mass is fixed to underlying tissue in the upper outer quadrant. There is skin dimpling overlying the mass and a palpable right axillary lymph node. Which of the following findings is MOST concerning for malignancy?",
    "options": [
      "The mass is painless and fixed to underlying tissue",
      "The mass is located in the upper outer quadrant",
      "The patient is postmenopausal",
      "The mass has been present for only 2 weeks"
    ],
    "correct": 0,
    "explanation": "A painless, hard, irregular mass that is fixed to underlying tissue is the most concerning finding for breast malignancy. Key red flags for breast cancer include: painless mass (pain is usually benign), fixation to skin or chest wall, irregular borders, skin changes (dimpling, peau d'orange), and axillary lymphadenopathy. While the upper outer quadrant (option B) is the most common location for breast cancer, location alone is not the most concerning feature. Being postmenopausal (option C) is a risk factor but not a specific exam finding. The short duration (option D) is not inherently concerning -- cancers can be detected at any point.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 36,
    "category": "GYN",
    "subcategory": "PID and Cervicitis",
    "stem": "A 21-year-old woman presents to the clinic with lower abdominal pain, fever of 101.2F (38.4C), and purulent vaginal discharge for the past 3 days. She is sexually active with two partners and uses condoms inconsistently. On bimanual examination, she has significant cervical motion tenderness (chandelier sign), bilateral adnexal tenderness, and uterine tenderness. What is the most appropriate outpatient treatment regimen?",
    "options": [
      "Azithromycin 1 g PO single dose",
      "IM Ceftriaxone 500 mg + Doxycycline 100 mg PO BID for 14 days + Metronidazole 500 mg PO BID for 14 days",
      "Fluconazole 150 mg PO single dose",
      "Ciprofloxacin 500 mg PO BID for 7 days"
    ],
    "correct": 1,
    "explanation": "This patient has pelvic inflammatory disease (PID), evidenced by lower abdominal pain, fever, purulent discharge, cervical motion tenderness (chandelier sign), adnexal tenderness, and uterine tenderness. The standard outpatient PID treatment regimen is IM Ceftriaxone (to cover Gonorrhea) + Doxycycline 100 mg PO BID for 14 days (to cover Chlamydia) + Metronidazole 500 mg PO BID for 14 days (to cover anaerobes). Azithromycin alone (option A) does not provide adequate coverage for polymicrobial PID. Fluconazole (option C) treats yeast infections, not PID. Ciprofloxacin (option D) is not recommended for gonorrhea due to resistance and does not cover the polymicrobial nature of PID.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 37,
    "category": "GYN",
    "subcategory": "PID and Cervicitis",
    "stem": "A 19-year-old sexually active woman presents with mucopurulent endocervical discharge and post-coital bleeding. She denies abdominal pain, fever, or systemic symptoms. On speculum examination, the cervix is erythematous and friable with yellow discharge from the os. Bimanual exam reveals no cervical motion tenderness, adnexal tenderness, or uterine tenderness. NAAT testing is pending. What is the most appropriate initial management?",
    "options": [
      "Wait for NAAT results before treating",
      "Treat empirically for both Chlamydia and Gonorrhea",
      "Prescribe metronidazole for bacterial vaginosis",
      "Schedule a colposcopy for the friable cervix"
    ],
    "correct": 1,
    "explanation": "This patient has cervicitis, characterized by mucopurulent endocervical discharge, cervical friability, and post-coital bleeding WITHOUT signs of upper tract infection (no abdominal pain, fever, or cervical motion tenderness). Cervicitis is most commonly caused by Chlamydia trachomatis or Neisseria gonorrhoeae. Empiric treatment for both organisms should be initiated at the time of diagnosis rather than waiting for NAAT results (option A), because delayed treatment increases the risk of ascending infection leading to PID. Metronidazole (option C) treats BV and trichomoniasis, not cervicitis. Colposcopy (option D) is for evaluating abnormal Pap smears, not acute mucopurulent cervicitis.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "category": "GYN",
    "subcategory": "PID and Cervicitis",
    "stem": "A 23-year-old woman is being treated for PID as an outpatient. She returns to the clinic 48 hours later with worsening lower abdominal pain, temperature of 102.8F (39.3C), nausea, and vomiting. On examination, she has rebound tenderness in the lower abdomen and a right adnexal mass is palpated on bimanual exam. Which of the following is the most appropriate next step?",
    "options": [
      "Switch to a different oral antibiotic regimen",
      "Add metronidazole to the current oral regimen",
      "Admit to the hospital for IV antibiotics and imaging to evaluate for tubo-ovarian abscess",
      "Discharge home with analgesics and follow up in 1 week"
    ],
    "correct": 2,
    "explanation": "This patient was initially treated for PID as an outpatient but has clinical deterioration with worsening pain, high fever, peritoneal signs (rebound tenderness), and a new adnexal mass -- all strongly suggestive of a tubo-ovarian abscess (TOA). This is an indication for hospitalization with IV antibiotics and imaging (pelvic ultrasound or CT). Indications for inpatient PID management include: failure of outpatient therapy, tubo-ovarian abscess, inability to tolerate oral medications, pregnancy, or surgical emergency. Switching oral antibiotics (option A) or adding metronidazole alone (option B) is insufficient for a potential TOA. Discharging home (option D) with worsening symptoms and peritoneal signs is dangerous.",
    "source": "GYN Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 39,
    "category": "GYN",
    "subcategory": "Menopause and Atrophic Vaginitis",
    "stem": "A 54-year-old woman presents with vaginal dryness, dyspareunia, and occasional light spotting for the past 6 months. Her last menstrual period was 2 years ago. On examination, the vaginal mucosa appears pale, thin, and dry with petechiae. Vaginal pH is 6.5. She has no history of breast cancer. What is the most appropriate treatment?",
    "options": [
      "Oral conjugated estrogen 0.625 mg daily",
      "Topical vaginal estrogen cream",
      "Metronidazole gel intravaginally",
      "Fluconazole 150 mg PO weekly for 6 weeks"
    ],
    "correct": 1,
    "explanation": "This postmenopausal woman (>12 months without menses) has atrophic vaginitis caused by decreased estrogen. Classic findings include vaginal dryness, dyspareunia, thin/pale vaginal mucosa, petechiae, and elevated vaginal pH (>5.0). The first-line treatment for symptomatic genitourinary syndrome of menopause/atrophic vaginitis is topical (local) vaginal estrogen, which directly treats the vaginal tissue with minimal systemic absorption. Oral systemic estrogen (option A) carries more risks (thromboembolism, stroke) and is not first-line for isolated vaginal symptoms. Metronidazole (option C) treats BV, and fluconazole (option D) treats candidiasis -- neither addresses atrophic changes.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 40,
    "category": "GYN",
    "subcategory": "Menopause and Atrophic Vaginitis",
    "stem": "A 62-year-old postmenopausal woman presents with new-onset vaginal bleeding. She went through menopause at age 52 and has not had any bleeding for 10 years. She takes no hormone replacement therapy. Physical examination is unremarkable. What is the most important initial consideration in managing this patient?",
    "options": [
      "Reassure her that occasional spotting is normal in postmenopausal women",
      "Prescribe topical vaginal estrogen for likely atrophic vaginitis",
      "Evaluate for endometrial cancer with transvaginal ultrasound and/or endometrial biopsy",
      "Obtain a Pap smear and follow up in 3 months"
    ],
    "correct": 2,
    "explanation": "Postmenopausal bleeding must be considered endometrial cancer until proven otherwise. Any vaginal bleeding occurring after 12 months of amenorrhea in a postmenopausal woman requires prompt evaluation with transvaginal ultrasound (to assess endometrial thickness) and/or endometrial biopsy. While atrophic vaginitis is actually the most common cause of postmenopausal bleeding, malignancy must be ruled out first. Reassurance (option A) is inappropriate without evaluation. Prescribing estrogen (option B) without ruling out cancer could stimulate a potential malignancy. A Pap smear (option D) screens for cervical cancer, not endometrial cancer.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "category": "GYN",
    "subcategory": "PCOS",
    "stem": "A 24-year-old woman with a BMI of 34 presents with irregular menstrual cycles occurring every 45-90 days, persistent acne, and excess facial hair growth (hirsutism) that began in her late teens. Laboratory studies show elevated free testosterone, normal DHEA-S, and a fasting glucose of 112 mg/dL. Pelvic ultrasound reveals bilateral ovaries with more than 12 follicles measuring 2-9 mm each. TSH and prolactin are normal. Which of the following is the most likely diagnosis?",
    "options": [
      "Congenital adrenal hyperplasia",
      "Polycystic ovary syndrome (PCOS)",
      "Hypothyroidism",
      "Cushing syndrome"
    ],
    "correct": 1,
    "explanation": "This patient meets the Rotterdam criteria for PCOS, requiring at least 2 of 3: (1) oligomenorrhea/anovulation (cycles every 45-90 days), (2) clinical or biochemical hyperandrogenism (hirsutism, acne, elevated free testosterone), and (3) polycystic ovaries on ultrasound (>12 follicles per ovary). She has all three. The elevated fasting glucose and obesity are common metabolic associations. Congenital adrenal hyperplasia (option A) would typically show elevated DHEA-S and 17-hydroxyprogesterone, but her DHEA-S is normal. Hypothyroidism (option C) is excluded by normal TSH. Cushing syndrome (option D) would present with central obesity, striae, buffalo hump, and elevated cortisol.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 42,
    "category": "GYN",
    "subcategory": "PCOS",
    "stem": "A 28-year-old woman with a known diagnosis of PCOS presents for management. She has a BMI of 31, oligomenorrhea (5-6 periods per year), hirsutism, and acanthosis nigricans. Her fasting insulin level is elevated. She is not currently trying to conceive. In addition to lifestyle modifications and weight loss, which of the following is the most appropriate pharmacologic intervention?",
    "options": [
      "Clomiphene citrate to induce ovulation",
      "Combined oral contraceptive pills",
      "Spironolactone monotherapy",
      "Metformin as the sole treatment"
    ],
    "correct": 1,
    "explanation": "For PCOS patients not desiring pregnancy, combined oral contraceptive pills (OCPs) are first-line pharmacotherapy. OCPs regulate menstrual cycles, protect the endometrium from unopposed estrogen (reducing endometrial hyperplasia risk), and reduce androgen levels (improving hirsutism and acne). Clomiphene citrate (option A) is used for ovulation induction in PCOS patients who WANT to conceive. Spironolactone (option C) is an anti-androgen that can be added for hirsutism but should not be used as monotherapy -- it requires contraception due to teratogenicity and does not regulate cycles. Metformin (option D) addresses insulin resistance but is not first-line as sole treatment for managing menstrual irregularity and hyperandrogenism in patients not seeking fertility.",
    "source": "GYN Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 43,
    "category": "GYN",
    "subcategory": "Bartholin Gland Disorders",
    "stem": "A 30-year-old woman presents with a painless, non-tender, 2 cm round swelling at the 5 o'clock position of the vaginal introitus. She noticed it about a week ago. There is no erythema, warmth, or fluctuance. She is afebrile and reports no difficulty with ambulation or intercourse. What is the most appropriate management?",
    "options": [
      "Incision and drainage with Word catheter placement",
      "Observation with warm sitz baths; consider antibiotics if it becomes symptomatic",
      "Immediate surgical excision of the Bartholin gland",
      "IV antibiotics and hospitalization"
    ],
    "correct": 1,
    "explanation": "This patient has an asymptomatic Bartholin gland cyst, which is a painless, non-tender cystic swelling at the posterolateral vaginal introitus (typically at the 5 or 7 o'clock position). Small, asymptomatic Bartholin cysts can be managed conservatively with observation and warm sitz baths. Antibiotics (such as Bactrim or Clindamycin) are appropriate if the cyst becomes symptomatic or shows signs of infection. Incision and drainage (option A) is indicated for a Bartholin abscess (painful, erythematous, fluctuant), not an asymptomatic cyst. Surgical excision (option C) is reserved for recurrent abscesses or women over 40 (to rule out malignancy). IV antibiotics (option D) are not warranted for an uncomplicated cyst.",
    "source": "GYN Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 44,
    "category": "GYN",
    "subcategory": "Bartholin Gland Disorders",
    "stem": "A 27-year-old woman presents to the urgent care clinic with a 3-day history of progressively worsening pain and swelling at the right side of her vaginal opening. She can barely sit or walk due to the pain. On examination, there is a 4 cm erythematous, warm, fluctuant, exquisitely tender mass at the 7 o'clock position of the vaginal introitus. Her temperature is 100.6F (38.1C). What is the most appropriate management?",
    "options": [
      "Warm sitz baths and oral Bactrim only",
      "Incision and drainage with Word catheter placement and antibiotics",
      "Topical antifungal cream",
      "Observation and reassurance"
    ],
    "correct": 1,
    "explanation": "This patient has a Bartholin gland abscess, characterized by a painful, erythematous, warm, fluctuant mass at the posterolateral vaginal introitus with low-grade fever. A Bartholin abscess requires incision and drainage (I&D) with Word catheter placement (to prevent recurrence by creating a new drainage tract) along with antibiotics (e.g., Bactrim or Clindamycin). Warm sitz baths and antibiotics alone (option A) are insufficient for a large, fluctuant abscess -- drainage is necessary. Topical antifungal cream (option C) treats candidiasis, not a bacterial abscess. Observation (option D) is inappropriate for an abscess with signs of infection and significant symptoms.",
    "source": "GYN Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "category": "GYN",
    "subcategory": "Infertility",
    "stem": "A 37-year-old woman and her 38-year-old male partner present to the clinic because they have been unable to conceive after 5 months of regular, unprotected intercourse. She has regular 28-day cycles and no significant medical history. He has no known medical issues. She asks when she should be referred for an infertility evaluation. What is the most appropriate recommendation?",
    "options": [
      "Refer now for infertility evaluation since she is 35 or older and has been trying for 6 months",
      "Advise them to continue trying for 12 months before evaluation since her cycles are regular",
      "Refer now for infertility evaluation given her age and 5 months of attempting",
      "Recommend she start clomiphene citrate empirically to improve her chances"
    ],
    "correct": 2,
    "explanation": "Infertility is defined as inability to conceive after 12 months of regular unprotected intercourse for women under 35, but for women aged 35 or older, the threshold is reduced to 6 months due to age-related decline in ovarian reserve and fertility. This 37-year-old woman has been trying for 5 months, which is approaching the 6-month threshold. Given her age, referral now is appropriate rather than waiting -- she is close enough to the 6-month mark that early referral is warranted to avoid further delay. Option B applies the 12-month rule, which is for women under 35. Option D (empiric clomiphene) should not be prescribed without a proper infertility workup. The most common cause of female infertility overall is ovulatory dysfunction, but a full evaluation of both partners is needed.",
    "source": "GYN Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 46,
    "category": "GU",
    "subcategory": "Urinalysis Interpretation",
    "stem": "A 45-year-old female presents with fatigue and bilateral lower extremity edema. A routine urinalysis reveals 3+ protein on dipstick. Which of the following conditions is most likely indicated by this finding?",
    "options": [
      "Kidney disease or damage",
      "Urinary tract infection",
      "Specimen contamination",
      "Dehydration"
    ],
    "correct": 0,
    "explanation": "Proteinuria on urinalysis is a hallmark indicator of kidney disease or damage. The kidneys normally prevent protein from passing into the urine, so its presence suggests glomerular or tubular dysfunction. Nitrites and leukocyte esterase (not protein) would suggest UTI. Epithelial cells (not protein) indicate specimen contamination. Dehydration may cause concentrated urine but does not cause significant proteinuria.",
    "source": "GU Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 47,
    "category": "GU",
    "subcategory": "Urinalysis Interpretation",
    "stem": "A 28-year-old female presents with dysuria and urinary frequency for 2 days. A urine dipstick shows positive nitrites and positive leukocyte esterase. Which of the following is the most likely diagnosis?",
    "options": [
      "Glomerulonephritis",
      "Urinary tract infection",
      "Contaminated specimen",
      "Nephrotic syndrome"
    ],
    "correct": 1,
    "explanation": "Positive nitrites combined with positive leukocyte esterase on a urine dipstick is the classic urinalysis pattern indicating a urinary tract infection (UTI). Nitrites are produced by gram-negative bacteria converting urinary nitrates, and leukocyte esterase indicates the presence of white blood cells fighting infection. Glomerulonephritis would show RBC casts. A contaminated specimen would show numerous epithelial cells. Nephrotic syndrome is characterized by heavy proteinuria, not nitrites and leukocyte esterase.",
    "source": "GU Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 48,
    "category": "GU",
    "subcategory": "Urinalysis Interpretation",
    "stem": "A 32-year-old male presents with cola-colored urine after a recent upper respiratory illness. Urinalysis shows RBC casts on microscopy. Which of the following diagnoses is most consistent with this finding?",
    "options": [
      "Urinary tract infection",
      "Nephrotic syndrome",
      "Glomerulonephritis",
      "Renal calculi"
    ],
    "correct": 2,
    "explanation": "RBC casts on urinalysis are pathognomonic for glomerulonephritis, indicating that red blood cells are being cast within the renal tubules due to glomerular inflammation. This patient's cola-colored urine after a respiratory illness is a classic presentation. A UTI would show nitrites and leukocyte esterase, not RBC casts. Nephrotic syndrome is characterized by massive proteinuria (protein loss), not RBC casts. Renal calculi cause hematuria but do not produce RBC casts.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 49,
    "category": "GU",
    "subcategory": "Urinalysis Interpretation",
    "stem": "A 22-year-old female presents with urinary complaints. A clean-catch urine specimen is obtained, and microscopy reveals numerous squamous epithelial cells. The provider should interpret this finding as which of the following?",
    "options": [
      "Evidence of a urinary tract infection",
      "An indicator of kidney disease",
      "A sign of glomerulonephritis",
      "Specimen contamination requiring repeat collection"
    ],
    "correct": 3,
    "explanation": "Numerous squamous epithelial cells in a urine specimen indicate contamination, meaning the specimen was not a proper clean-catch collection and likely contains vaginal or skin flora. This invalidates culture results and requires a repeat clean-catch specimen. Epithelial cells do not indicate UTI (which shows nitrites and leukocyte esterase), kidney disease (which shows proteinuria), or glomerulonephritis (which shows RBC casts).",
    "source": "GU Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 50,
    "category": "GU",
    "subcategory": "UTI and Asymptomatic Bacteriuria",
    "stem": "A 26-year-old female at 16 weeks gestation has a routine urine culture that grows >100,000 CFU/mL of E. coli. She denies any urinary symptoms including dysuria, frequency, or urgency. What is the most appropriate management?",
    "options": [
      "No treatment is needed since she is asymptomatic",
      "Repeat the urine culture in one month",
      "Treat with an appropriate antibiotic",
      "Obtain a renal ultrasound before treating"
    ],
    "correct": 2,
    "explanation": "Asymptomatic bacteriuria should be treated ONLY in pregnant patients due to the significant risk of progression to pyelonephritis and adverse pregnancy outcomes including preterm labor. Even though she has no symptoms, the positive culture in pregnancy mandates antibiotic treatment. In non-pregnant patients, asymptomatic bacteriuria would not require treatment. Simply repeating the culture delays necessary treatment. A renal ultrasound is not indicated for uncomplicated bacteriuria.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 51,
    "category": "GU",
    "subcategory": "UTI and Asymptomatic Bacteriuria",
    "stem": "A 70-year-old female presents for a wellness exam. A routine urine culture grows >100,000 CFU/mL of bacteria. She denies dysuria, urgency, frequency, or suprapubic pain. She is afebrile with stable vital signs. What is the most appropriate next step?",
    "options": [
      "Prescribe nitrofurantoin for 5 days",
      "Prescribe trimethoprim-sulfamethoxazole for 3 days",
      "No treatment is indicated",
      "Refer to urology for further evaluation"
    ],
    "correct": 2,
    "explanation": "This elderly patient has asymptomatic bacteriuria, which does NOT require treatment in non-pregnant patients. Treating asymptomatic bacteriuria in non-pregnant individuals provides no clinical benefit and contributes to antibiotic resistance. Treatment with nitrofurantoin or trimethoprim-sulfamethoxazole is only appropriate for symptomatic UTI or asymptomatic bacteriuria in pregnancy. A urology referral is unnecessary for this common finding in elderly women.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 52,
    "category": "GU",
    "subcategory": "UTI and Asymptomatic Bacteriuria",
    "stem": "A 30-year-old female presents with dysuria, urinary frequency, and suprapubic discomfort for 3 days. Urinalysis shows positive leukocyte esterase and positive nitrites. She has no drug allergies and is not pregnant. Which of the following is the most appropriate first-line treatment?",
    "options": [
      "Ciprofloxacin 500 mg BID for 7 days",
      "Amoxicillin 500 mg TID for 7 days",
      "Nitrofurantoin (Macrobid) 100 mg BID for 5 days",
      "Azithromycin 1 g single dose"
    ],
    "correct": 2,
    "explanation": "For uncomplicated UTI, the recommended first-line treatments are nitrofurantoin (Macrobid) or trimethoprim-sulfamethoxazole (Bactrim). Nitrofurantoin is preferred due to narrow-spectrum activity and minimal resistance. Ciprofloxacin (a fluoroquinolone) is reserved for pyelonephritis, not uncomplicated UTI, to prevent resistance development. Amoxicillin has high resistance rates for UTI pathogens. Azithromycin is a macrolide used for respiratory and STI infections, not UTIs.",
    "source": "GU Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 53,
    "category": "GU",
    "subcategory": "Pyelonephritis",
    "stem": "A 35-year-old female presents with fever of 102.4°F, left flank pain, nausea, vomiting, and malaise for 2 days. She reports having urinary frequency and dysuria that began 5 days ago. Physical exam reveals left costovertebral angle (CVA) tenderness. Urinalysis is positive for leukocyte esterase and nitrites. Which of the following is the most appropriate treatment?",
    "options": [
      "Nitrofurantoin (Macrobid) 100 mg BID for 5 days",
      "Trimethoprim-sulfamethoxazole DS BID for 3 days",
      "Fluoroquinolone (e.g., ciprofloxacin) for 7-14 days",
      "Amoxicillin-clavulanate 875 mg BID for 7 days"
    ],
    "correct": 2,
    "explanation": "This patient presents with classic pyelonephritis: fever, flank pain, CVA tenderness, and flu-like symptoms along with positive UA findings. The recommended treatment for pyelonephritis is a fluoroquinolone such as ciprofloxacin. Nitrofurantoin does not achieve adequate tissue concentrations in the renal parenchyma and is only appropriate for lower UTIs, not pyelonephritis. Trimethoprim-sulfamethoxazole for 3 days is a course for uncomplicated lower UTI. Amoxicillin-clavulanate is not first-line for pyelonephritis.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "category": "GU",
    "subcategory": "Pyelonephritis",
    "stem": "A 6-week-old infant is brought to the clinic by his mother with a fever of 101.8°F, poor feeding, and irritability for 1 day. Urinalysis obtained by catheterization shows positive leukocyte esterase and WBCs. The infant is diagnosed with a urinary tract infection. What is the most appropriate disposition for this patient?",
    "options": [
      "Outpatient treatment with oral amoxicillin",
      "Outpatient treatment with oral cephalexin and follow-up in 48 hours",
      "Hospital admission for IV antibiotics and further evaluation",
      "Observation with no antibiotics and recheck in 24 hours"
    ],
    "correct": 2,
    "explanation": "Infants less than 2 months of age with UTI/pyelonephritis require hospitalization for IV antibiotics due to their immature immune system, risk of urosepsis, and potential for rapid deterioration. Additional indications for hospitalization include severe illness, inability to tolerate oral medications (vomiting), and sepsis risk. Outpatient oral therapy is inappropriate for this age group regardless of the antibiotic chosen. Observation without treatment in a febrile infant with confirmed UTI would be dangerous.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 55,
    "category": "GU",
    "subcategory": "AKI vs CKD",
    "stem": "A 58-year-old male with a history of hypertension and diabetes presents with fatigue and lower extremity edema. Labs show GFR of 42 mL/min, hemoglobin 9.8 g/dL, elevated phosphorus, and low calcium. Renal ultrasound reveals bilaterally small kidneys. Which of the following diagnoses is most consistent with these findings?",
    "options": [
      "Acute kidney injury",
      "Chronic kidney disease",
      "Nephrotic syndrome",
      "Acute glomerulonephritis"
    ],
    "correct": 1,
    "explanation": "This patient has the classic triad of chronic kidney disease (CKD): anemia (due to decreased erythropoietin production), hyperphosphatemia (impaired phosphorus excretion), and small kidneys on imaging (indicating chronic scarring and atrophy). The GFR of 42 mL/min is consistent with CKD Stage 3. AKI would typically present with normal-sized kidneys, no anemia, and no calcium/phosphorus changes. Nephrotic syndrome is characterized by massive proteinuria and edema. Acute glomerulonephritis would present with hematuria and RBC casts.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 56,
    "category": "GU",
    "subcategory": "AKI vs CKD",
    "stem": "A 62-year-old male is admitted to the hospital with dehydration after 4 days of vomiting and diarrhea. His creatinine has risen from a baseline of 1.0 mg/dL to 3.2 mg/dL over 48 hours. His hemoglobin is 14.2 g/dL, phosphorus is normal, and renal ultrasound shows normal-sized kidneys bilaterally. Which of the following is the most likely diagnosis?",
    "options": [
      "Chronic kidney disease",
      "Acute kidney injury",
      "Post-streptococcal glomerulonephritis",
      "Nephrotic syndrome"
    ],
    "correct": 1,
    "explanation": "This patient has acute kidney injury (AKI), characterized by an acute decline in renal function (rapid rise in creatinine over 48 hours) in the setting of a clear precipitant (dehydration from GI losses). Key differentiating features from CKD include: normal hemoglobin (no anemia), normal phosphorus (no Ca/Phos abnormalities), and normal-sized kidneys on imaging. CKD would show anemia, hyperphosphatemia, and small kidneys. Post-streptococcal GN would present with tea-colored urine and a history of recent strep infection. Nephrotic syndrome presents with massive proteinuria.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 57,
    "category": "GU",
    "subcategory": "AKI vs CKD",
    "stem": "A 66-year-old female with CKD Stage 3 and a GFR of 38 mL/min presents for a follow-up visit. Her blood pressure is 152/94 mmHg. She is currently taking amlodipine 10 mg daily. Which of the following antihypertensive medications should be added to her regimen as the preferred agent for CKD?",
    "options": [
      "Metoprolol (beta-blocker)",
      "Lisinopril (ACE inhibitor)",
      "Hydrochlorothiazide (thiazide diuretic)",
      "Clonidine (alpha-2 agonist)"
    ],
    "correct": 1,
    "explanation": "ACE inhibitors (e.g., lisinopril) or ARBs are the preferred antihypertensive agents for patients with CKD because they provide renoprotective effects by reducing intraglomerular pressure and decreasing proteinuria, thereby slowing CKD progression. Metoprolol is a beta-blocker that does not offer the same renoprotective benefits. Hydrochlorothiazide becomes less effective as GFR declines below 30 and does not provide direct renal protection. Clonidine is not a first-line agent for hypertension in CKD.",
    "source": "GU Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 58,
    "category": "GU",
    "subcategory": "AKI vs CKD",
    "stem": "A nurse practitioner is evaluating two patients in clinic. Patient A has a creatinine of 4.5 mg/dL, hemoglobin of 8.2 g/dL, phosphorus of 7.1 mg/dL, and bilateral small kidneys on ultrasound. Patient B has a creatinine of 4.0 mg/dL, hemoglobin of 13.8 g/dL, normal phosphorus, and normal-sized kidneys on ultrasound. Which of the following statements is most accurate?",
    "options": [
      "Both patients have AKI based on elevated creatinine levels",
      "Patient A likely has AKI and Patient B likely has CKD",
      "Patient A likely has CKD and Patient B likely has AKI",
      "Both patients have CKD because creatinine is elevated in both"
    ],
    "correct": 2,
    "explanation": "Patient A demonstrates the hallmark features of CKD: anemia (Hgb 8.2, from decreased erythropoietin), hyperphosphatemia (Phos 7.1), and small kidneys (chronic scarring). Patient B has features more consistent with AKI: no anemia (normal Hgb 13.8), normal phosphorus, and normal-sized kidneys, suggesting an acute process that has not yet caused the chronic changes seen in CKD. Elevated creatinine alone does not differentiate between AKI and CKD; the associated findings are key to distinguishing between the two.",
    "source": "GU Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 59,
    "category": "GU",
    "subcategory": "Post-Streptococcal Glomerulonephritis",
    "stem": "A 7-year-old male is brought to the clinic by his mother. She reports that his urine has been dark \"tea-colored\" for the past 2 days. On exam, periorbital edema is noted and blood pressure is 132/88 mmHg. The mother reports he had a sore throat treated with antibiotics about 3 weeks ago. Which of the following is the most likely diagnosis?",
    "options": [
      "Urinary tract infection",
      "Post-streptococcal glomerulonephritis",
      "Nephrotic syndrome",
      "Renal calculi"
    ],
    "correct": 1,
    "explanation": "This presentation is classic for post-streptococcal glomerulonephritis (PSGN): tea-colored (cola-colored) urine, periorbital edema, hypertension, and a history of streptococcal infection 1-6 weeks prior. The 3-week timeline following the sore throat fits perfectly. A UTI would not cause tea-colored urine, periorbital edema, or hypertension. Nephrotic syndrome presents with massive proteinuria, generalized edema, and hypoalbuminemia but typically without hypertension or hematuria as the primary feature. Renal calculi cause colicky flank pain radiating to the groin, not tea-colored urine with edema.",
    "source": "GU Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 60,
    "category": "GU",
    "subcategory": "Post-Streptococcal Glomerulonephritis",
    "stem": "A 9-year-old female presents with periorbital edema, dark-brown urine, and a blood pressure of 140/92 mmHg. Her mother reports the child had impetigo on her legs about 4 weeks ago. Urinalysis reveals hematuria with RBC casts. Serum complement C3 is low. Which of the following findings would be expected on the urinalysis of this patient?",
    "options": [
      "Numerous squamous epithelial cells",
      "Positive nitrites and leukocyte esterase only",
      "RBC casts and proteinuria",
      "Large amounts of glucose"
    ],
    "correct": 2,
    "explanation": "Post-streptococcal glomerulonephritis (PSGN) can follow either pharyngeal or skin strep infections (such as impetigo) 1-6 weeks prior. The hallmark urinalysis findings include RBC casts (pathognomonic for glomerulonephritis indicating glomerular inflammation) and proteinuria (from damaged glomerular filtration). Low complement C3 is a supportive lab finding. Squamous epithelial cells indicate specimen contamination, not glomerulonephritis. Positive nitrites and leukocyte esterase alone would suggest UTI. Glucosuria suggests diabetes, not glomerulonephritis.",
    "source": "GU Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 61,
    "category": "GU",
    "subcategory": "Hematuria",
    "stem": "A 5-year-old male is brought to the clinic for gross hematuria noted by his parents. He is otherwise well-appearing, afebrile, and has a benign abdominal exam. There is no history of trauma or recent illness. What is the most appropriate initial imaging study for this patient?",
    "options": [
      "CT abdomen and pelvis with contrast",
      "Renal ultrasound",
      "Intravenous pyelogram",
      "Voiding cystourethrogram"
    ],
    "correct": 1,
    "explanation": "In children with hematuria, renal ultrasound is the preferred initial imaging study. It is non-invasive, does not expose the child to radiation, and can evaluate kidney size, structure, masses, hydronephrosis, and stones. CT abdomen and pelvis with contrast exposes the child to unnecessary radiation and is not first-line for pediatric hematuria evaluation. An intravenous pyelogram (IVP) involves radiation and contrast and has been largely replaced by other modalities. A voiding cystourethrogram is used for evaluating vesicoureteral reflux, not the initial workup of hematuria.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 62,
    "category": "GU",
    "subcategory": "Hematuria",
    "stem": "A 42-year-old male presents with painless gross hematuria that he first noticed 3 days ago. He denies dysuria, frequency, or flank pain. He has a 20-pack-year smoking history. Urinalysis confirms the presence of red blood cells on microscopy. What is the most appropriate next step in management?",
    "options": [
      "Treat empirically with nitrofurantoin for UTI",
      "Reassure the patient and repeat urinalysis in 6 months",
      "Refer to urology for further evaluation",
      "Order a renal ultrasound only and follow up in clinic"
    ],
    "correct": 2,
    "explanation": "In patients over age 35 with hematuria, there is a higher risk of urologic malignancy, especially with risk factors such as smoking. This patient is 42 years old with painless gross hematuria and a significant smoking history, warranting referral to urology for comprehensive evaluation including cystoscopy to rule out bladder or urothelial cancer. Empiric antibiotic treatment is inappropriate without evidence of UTI (no symptoms, no nitrites/LE mentioned). Reassurance and delayed follow-up could miss a malignancy. A renal ultrasound alone is insufficient for complete evaluation of malignancy risk in adults over 35.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 63,
    "category": "GU",
    "subcategory": "Kidney Stones/Renal Calculi",
    "stem": "A 38-year-old male presents to urgent care with sudden-onset severe left flank pain radiating to the groin. He is writhing in pain and has vomited twice. Vital signs are T 98.8°F, HR 102, BP 148/92. Abdominal exam reveals left CVA tenderness. Urinalysis shows microscopic hematuria. A pregnancy test is not applicable. What is the most appropriate diagnostic study to confirm the suspected diagnosis?",
    "options": [
      "Abdominal X-ray (KUB)",
      "CT abdomen and pelvis WITH contrast",
      "CT abdomen and pelvis WITHOUT contrast",
      "Renal ultrasound"
    ],
    "correct": 2,
    "explanation": "CT abdomen and pelvis WITHOUT contrast is the gold standard imaging study for suspected renal calculi (kidney stones). It has high sensitivity and specificity for detecting stones regardless of composition and can identify other causes of acute flank pain. Contrast is specifically avoided because it can obscure calcifications and is unnecessary for stone detection. An abdominal X-ray (KUB) can miss small stones and radiolucent stones (such as uric acid stones). Renal ultrasound may miss ureteral stones and is less sensitive than CT for this diagnosis.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "category": "GU",
    "subcategory": "Incontinence",
    "stem": "A 52-year-old female, G3P3, presents complaining of involuntary urine leakage when she coughs, sneezes, or laughs. She denies urinary urgency or frequency. She does not leak urine at rest. Physical exam reveals no pelvic organ prolapse. What is the most appropriate first-line treatment?",
    "options": [
      "Oxybutynin (anticholinergic)",
      "Pelvic floor muscle exercises (Kegels)",
      "Desmopressin nasal spray",
      "Referral for surgical sling procedure"
    ],
    "correct": 1,
    "explanation": "This patient has stress urinary incontinence, characterized by involuntary leakage with increased abdominal pressure from coughing, sneezing, or laughing. The first-line treatment for stress incontinence is pelvic floor muscle exercises (Kegels) to strengthen the pelvic floor musculature. Oxybutynin, an anticholinergic, is used for urge incontinence (overactive bladder), not stress incontinence. Desmopressin is used for nocturnal enuresis, not stress incontinence. Surgical referral is reserved for patients who fail conservative management.",
    "source": "GU Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 65,
    "category": "GU",
    "subcategory": "Incontinence",
    "stem": "A 68-year-old female presents with a 6-month history of a sudden, strong urge to urinate followed by involuntary urine loss before she can reach the bathroom. She reports urinary frequency of 10-12 times per day and nocturia 3-4 times per night. Urinalysis is negative for infection. Post-void residual is 30 mL. After failed behavioral modifications, which of the following is the most appropriate pharmacologic treatment?",
    "options": [
      "Pelvic floor muscle exercises (Kegels)",
      "Desmopressin (DDAVP)",
      "Anticholinergic medication (e.g., oxybutynin)",
      "Alpha-adrenergic agonist (e.g., pseudoephedrine)"
    ],
    "correct": 2,
    "explanation": "This patient has urge incontinence (overactive bladder), characterized by urgency, frequency, and involuntary leakage associated with a sudden urge to void. After behavioral modifications have failed, the first-line pharmacologic treatment is anticholinergic medications such as oxybutynin, which work by relaxing the detrusor muscle and reducing bladder contractions. Kegels are the first-line treatment for stress incontinence, not urge incontinence. Desmopressin is used for nocturnal enuresis (bedwetting). Alpha-adrenergic agonists are not indicated for urge incontinence treatment.",
    "source": "GU Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 66,
    "category": "STI",
    "subcategory": "Chlamydia",
    "stem": "A 22-year-old female presents to the clinic for a routine well-woman exam. She is sexually active with one male partner and uses oral contraceptive pills for birth control. She denies any vaginal discharge, dysuria, or pelvic pain. As part of routine screening, a nucleic acid amplification test (NAAT) of the cervix is performed and returns positive for Chlamydia trachomatis. What is the most appropriate treatment for this patient?",
    "options": [
      "Doxycycline 100 mg PO BID for 7 days",
      "Azithromycin 1 g PO single dose plus IM ceftriaxone 500 mg",
      "Metronidazole 500 mg PO BID for 7 days",
      "IM ceftriaxone 500 mg single dose"
    ],
    "correct": 0,
    "explanation": "Doxycycline 100 mg PO BID for 7 days is the first-line treatment for uncomplicated chlamydial infection. Chlamydia is often asymptomatic, especially in women, which is why routine screening is essential. Option B is incorrect because adding IM ceftriaxone is the co-treatment regimen used when gonorrhea is diagnosed (or suspected), not for chlamydia alone. Metronidazole (Option C) is used for trichomoniasis, not chlamydia. IM ceftriaxone alone (Option D) treats gonorrhea but does not cover chlamydia.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 67,
    "category": "STI",
    "subcategory": "Chlamydia",
    "stem": "A 19-year-old male college student presents with mild dysuria and a scant, clear urethral discharge that he noticed for the past 3 days. He reports unprotected sexual intercourse with a new female partner 2 weeks ago. He denies fever, testicular pain, or swelling. A NAAT of the urine is positive for Chlamydia trachomatis and negative for Neisseria gonorrhoeae. Which clinical feature is most consistent with chlamydial urethritis rather than gonococcal urethritis?",
    "options": [
      "Purulent, greenish urethral discharge",
      "Clear to white, mucoid urethral discharge",
      "Painful vesicular lesions on the penile shaft",
      "Frothy, yellow-green discharge with foul odor"
    ],
    "correct": 1,
    "explanation": "Chlamydial urethritis classically presents with a clear to white, mucoid (non-purulent) urethral discharge and mild dysuria. This is in contrast to gonococcal urethritis, which typically produces a purulent, greenish discharge (Option A). Painful vesicular lesions (Option C) are characteristic of herpes simplex virus (HSV) infection, not chlamydia. Frothy, yellow-green discharge with foul odor (Option D) is the hallmark presentation of trichomoniasis. The clear, mild nature of chlamydial discharge is a key clinical distinguishing feature.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 68,
    "category": "STI",
    "subcategory": "Chlamydia",
    "stem": "A 28-year-old female who is 14 weeks pregnant presents with mild dysuria and a thin, clear vaginal discharge. NAAT testing is positive for Chlamydia trachomatis. She has no known drug allergies. Which treatment is most appropriate for this patient?",
    "options": [
      "Doxycycline 100 mg PO BID for 7 days",
      "Azithromycin 1 g PO single dose",
      "Metronidazole 2 g PO single dose",
      "Levofloxacin 500 mg PO daily for 7 days"
    ],
    "correct": 1,
    "explanation": "In pregnant patients with chlamydia, azithromycin 1 g PO as a single dose is the recommended treatment. Doxycycline (Option A) is contraindicated in pregnancy because tetracyclines can cause tooth discoloration and impaired bone growth in the fetus. Metronidazole (Option C) is used for trichomoniasis, not chlamydia. Levofloxacin (Option D), a fluoroquinolone, is generally avoided in pregnancy due to potential risks to fetal cartilage development and is not a first-line agent for chlamydia treatment.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 69,
    "category": "STI",
    "subcategory": "Gonorrhea",
    "stem": "A 25-year-old male presents to the urgent care clinic with a 2-day history of copious, purulent, greenish urethral discharge and painful urination. He reports multiple recent sexual partners and inconsistent condom use. On examination, a thick, yellowish-green discharge is expressed from the urethral meatus. NAAT testing is positive for Neisseria gonorrhoeae. What is the most appropriate treatment regimen?",
    "options": [
      "Metronidazole 500 mg PO BID for 7 days",
      "Acyclovir 400 mg PO TID for 7 days",
      "IM ceftriaxone 500 mg single dose plus doxycycline 100 mg PO BID for 7 days",
      "Doxycycline 100 mg PO BID for 7 days alone"
    ],
    "correct": 2,
    "explanation": "When gonorrhea is diagnosed, the standard treatment is IM ceftriaxone PLUS treatment for presumed chlamydia co-infection with doxycycline. This dual therapy is a key principle because chlamydia and gonorrhea frequently co-occur, and co-treatment is always recommended regardless of chlamydia test results. Doxycycline alone (Option D) would only treat chlamydia and is insufficient for gonorrhea. Metronidazole (Option A) treats trichomoniasis, not gonorrhea. Acyclovir (Option B) is an antiviral used for herpes, not a bacterial STI.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 70,
    "category": "STI",
    "subcategory": "Gonorrhea",
    "stem": "A 30-year-old female presents with a 5-day history of increased yellowish-green vaginal discharge, dysuria, and lower abdominal discomfort. She is sexually active with two male partners and does not use barrier protection. On speculum exam, a mucopurulent cervical discharge is noted. NAAT is positive for Neisseria gonorrhoeae and negative for Chlamydia trachomatis. The FNP should prescribe which of the following?",
    "options": [
      "IM ceftriaxone 500 mg single dose only, since chlamydia NAAT is negative",
      "IM ceftriaxone 500 mg single dose plus doxycycline 100 mg PO BID for 7 days",
      "Azithromycin 1 g PO single dose only",
      "Metronidazole 2 g PO single dose plus partner treatment"
    ],
    "correct": 1,
    "explanation": "Even though the chlamydia NAAT is negative, the standard of care when treating gonorrhea is to ALWAYS co-treat for chlamydia with doxycycline. This is because co-infection rates are high and NAAT testing may miss early chlamydial infections. Option A is incorrect because treating gonorrhea alone without chlamydia coverage violates co-treatment principles, even with a negative chlamydia test. Azithromycin alone (Option C) does not adequately treat gonorrhea. Metronidazole (Option D) is for trichomoniasis and is not indicated here.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 71,
    "category": "STI",
    "subcategory": "Gonorrhea",
    "stem": "A 17-year-old male high school student presents with his mother to the clinic. He reports painful urination and a thick, greenish penile discharge for 2 days. He is reluctant to discuss his sexual history in front of his mother. After the FNP speaks with him privately, he admits to unprotected oral and vaginal intercourse with a female partner. NAAT is positive for N. gonorrhoeae. Which diagnostic method was used to confirm this diagnosis?",
    "options": [
      "Rapid plasma reagin (RPR) titer",
      "Viral culture of discharge",
      "Nucleic acid amplification test (NAAT)",
      "KOH wet mount preparation"
    ],
    "correct": 2,
    "explanation": "NAAT (nucleic acid amplification test) is the gold standard diagnostic test for both gonorrhea and chlamydia. It offers the highest sensitivity and specificity and can be performed on urine samples or swab specimens. RPR (Option A) is a screening test for syphilis, not gonorrhea. Viral culture (Option B) is used for herpes simplex virus, not bacterial infections like gonorrhea. KOH wet mount (Option D) is used to diagnose fungal infections such as candidiasis, not gonorrhea.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 72,
    "category": "STI",
    "subcategory": "Trichomoniasis",
    "stem": "A 34-year-old female presents with a 1-week history of profuse, frothy, yellow-green vaginal discharge with a strong foul odor. She also reports vulvar itching and irritation. She is sexually active with one male partner. On speculum exam, the FNP observes a frothy discharge and punctate hemorrhages on the cervix giving it a characteristic 'strawberry' appearance. Wet mount microscopy reveals motile, flagellated organisms. What is the most appropriate management plan?",
    "options": [
      "Treat the patient with metronidazole and advise that partner treatment is not necessary",
      "Treat the patient with metronidazole and ensure her sexual partner is also treated",
      "Treat the patient with doxycycline 100 mg PO BID for 7 days",
      "Treat the patient with IM ceftriaxone 500 mg single dose"
    ],
    "correct": 1,
    "explanation": "Trichomoniasis is caused by the protozoan Trichomonas vaginalis and is treated with metronidazole. A key principle in trichomoniasis management is that the sexual partner MUST ALWAYS be treated simultaneously to prevent reinfection (ping-pong transmission). Option A is incorrect specifically because it states partner treatment is not necessary, which violates this critical principle. Doxycycline (Option C) treats chlamydia, not trichomoniasis. IM ceftriaxone (Option D) treats gonorrhea, not trichomoniasis. The classic triad of frothy yellow-green discharge, foul odor, and strawberry cervix is pathognomonic for trichomoniasis.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 73,
    "category": "STI",
    "subcategory": "Trichomoniasis",
    "stem": "A 40-year-old female presents for follow-up after being treated for trichomoniasis with metronidazole 2 g single dose three weeks ago. She reports that her symptoms initially improved but have now returned with the same frothy, malodorous discharge. She confirms that she resumed sexual intercourse with her male partner one week after completing treatment. Her partner was never evaluated or treated. What is the most likely reason for her recurrent symptoms?",
    "options": [
      "She developed antibiotic resistance to metronidazole",
      "She was reinfected by her untreated sexual partner",
      "The initial diagnosis of trichomoniasis was incorrect",
      "She requires a longer course of doxycycline therapy"
    ],
    "correct": 1,
    "explanation": "The most likely reason for this patient's recurrent symptoms is reinfection from her untreated sexual partner. In trichomoniasis, it is essential to ALWAYS treat the partner to prevent reinfection. When partners are not treated simultaneously, the infection is transmitted back and forth (ping-pong infection). Metronidazole resistance (Option A) is rare and would not be the most likely explanation in this clinical scenario. The classic presentation makes an incorrect initial diagnosis (Option C) unlikely. Doxycycline (Option D) is not used for trichomoniasis; it treats chlamydia.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 74,
    "category": "STI",
    "subcategory": "Herpes/HSV",
    "stem": "A 26-year-old female presents with a 3-day history of multiple painful, grouped vesicles on an erythematous base on her vulva and labia. She reports burning and tingling that preceded the lesions by 24 hours. She also notes bilateral inguinal lymphadenopathy, low-grade fever, and malaise. She reports a new sexual partner 10 days ago. This is her first episode of these symptoms. What is the most appropriate initial treatment?",
    "options": [
      "IM ceftriaxone 500 mg single dose plus doxycycline",
      "Acyclovir 400 mg PO TID for 7-10 days",
      "Metronidazole 500 mg PO BID for 7 days",
      "IM penicillin G benzathine 2.4 million units single dose"
    ],
    "correct": 1,
    "explanation": "This patient presents with a classic primary herpes simplex virus (HSV) outbreak: painful grouped vesicles on an erythematous base, preceded by a prodrome of burning and tingling, with systemic symptoms (fever, malaise) and bilateral inguinal lymphadenopathy. Acyclovir is the first-line antiviral treatment for both episodic and suppressive therapy of genital herpes. For a primary outbreak, the course is typically 7-10 days. IM ceftriaxone plus doxycycline (Option A) is the treatment for gonorrhea with chlamydia co-treatment. Metronidazole (Option C) treats trichomoniasis. IM penicillin G (Option D) is the treatment for syphilis.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 75,
    "category": "STI",
    "subcategory": "Herpes/HSV",
    "stem": "A 32-year-old male with a known history of genital HSV-2 presents to discuss management options. He reports experiencing 6-7 recurrent outbreaks per year, each lasting about a week. The outbreaks significantly impact his quality of life and his relationship. He asks the FNP about options to reduce the frequency of his outbreaks. What is the most appropriate recommendation?",
    "options": [
      "Episodic acyclovir only when outbreaks occur",
      "Daily suppressive acyclovir therapy",
      "IM penicillin G benzathine every 3 months",
      "Daily doxycycline 100 mg for long-term suppression"
    ],
    "correct": 1,
    "explanation": "For patients with frequent recurrences of genital herpes (generally 6 or more outbreaks per year), daily suppressive antiviral therapy with acyclovir (or valacyclovir) is recommended. Suppressive therapy reduces outbreak frequency by 70-80% and also decreases the risk of viral shedding and transmission to partners. Episodic therapy alone (Option A) would treat each outbreak as it occurs but would not reduce the frequency of recurrences, which is this patient's primary concern. Penicillin G (Option C) is for syphilis treatment, not herpes. Doxycycline (Option D) is an antibiotic used for chlamydia and has no antiviral activity against HSV.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 76,
    "category": "STI",
    "subcategory": "Syphilis",
    "stem": "A 45-year-old male presents with a single, painless, firm ulcer on the glans of his penis that he first noticed about 1 week ago. He denies any pain, discharge, or systemic symptoms. He reports unprotected sexual contact with a new male partner 3 weeks ago. On examination, the ulcer has a clean base and indurated edges, and bilateral non-tender inguinal lymphadenopathy is noted. An RPR test is reactive at 1:32 and confirmed with a positive FTA-ABS. What stage of syphilis does this presentation represent?",
    "options": [
      "Secondary syphilis",
      "Tertiary syphilis",
      "Latent syphilis",
      "Primary syphilis"
    ],
    "correct": 3,
    "explanation": "This patient presents with primary syphilis, characterized by a painless chancre, which is a single, firm, painless ulcer with indurated edges at the site of inoculation. The chancre typically appears 10-90 days after exposure. The painless nature is a key distinguishing feature, as HSV ulcers are painful. Secondary syphilis (Option A) presents with diffuse maculopapular rash (including palms and soles), condylomata lata, and systemic symptoms. Tertiary syphilis (Option B) occurs years later with gummas, cardiovascular, or neurologic manifestations. Latent syphilis (Option C) is asymptomatic with positive serologic testing only.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 77,
    "category": "STI",
    "subcategory": "Syphilis",
    "stem": "A 38-year-old female is diagnosed with primary syphilis after presenting with a painless vulvar chancre and a reactive RPR at 1:64. She reports a penicillin allergy (childhood rash, no anaphylaxis history). The FNP confirms primary syphilis with a positive treponemal confirmatory test. What is the recommended first-line treatment?",
    "options": [
      "Doxycycline 100 mg PO BID for 14 days",
      "IM penicillin G benzathine 2.4 million units single dose",
      "Azithromycin 2 g PO single dose",
      "IM ceftriaxone 500 mg single dose"
    ],
    "correct": 1,
    "explanation": "IM penicillin G benzathine 2.4 million units as a single intramuscular injection is the first-line treatment for primary syphilis, regardless of reported penicillin allergy when the allergy history is not consistent with true anaphylaxis. A childhood rash is not a contraindication to penicillin, and penicillin remains the only proven effective treatment for syphilis. Patients with true penicillin allergy should undergo desensitization before treatment. Doxycycline (Option A) may be used as an alternative in non-pregnant patients with confirmed severe penicillin allergy but is not first-line. Azithromycin (Option C) has emerging resistance and is not recommended. Ceftriaxone (Option D) is used for gonorrhea, not syphilis.",
    "source": "STI Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 78,
    "category": "STI",
    "subcategory": "Syphilis",
    "stem": "A 29-year-old male was treated for primary syphilis with IM penicillin G benzathine 2.4 million units 6 months ago. His initial RPR titer was 1:128. He returns for follow-up and a repeat RPR is drawn, returning at 1:16. He is asymptomatic and reports no new sexual exposures. How should the FNP interpret these results?",
    "options": [
      "Treatment failure requiring retreatment with a different antibiotic",
      "Appropriate treatment response, as RPR is used to monitor treatment effectiveness and a fourfold decline indicates success",
      "New reinfection requiring repeat treatment with penicillin G",
      "False-positive RPR requiring confirmatory FTA-ABS testing"
    ],
    "correct": 1,
    "explanation": "The RPR (Rapid Plasma Reagin) is a non-treponemal test used for both diagnosis and monitoring treatment response in syphilis. A fourfold or greater decline in RPR titer (e.g., from 1:128 to 1:32 or lower) within 6-12 months of treatment indicates an appropriate response to therapy. This patient's decline from 1:128 to 1:16 represents a greater than fourfold decline (three dilutions), indicating successful treatment. Option A is incorrect because the declining titer confirms treatment success, not failure. Option C is incorrect because there are no new exposures and the titer is declining, not rising. Option D is incorrect because the RPR was already confirmed with treponemal testing at diagnosis.",
    "source": "STI Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 79,
    "category": "STI",
    "subcategory": "HIV",
    "stem": "A 50-year-old male presents for an annual physical examination. He has a history of hypertension and type 2 diabetes, both well-controlled. He has been in a monogamous relationship with his wife for 25 years. He has never been tested for HIV. According to current screening guidelines, what is the most appropriate action by the FNP?",
    "options": [
      "HIV screening is not indicated because he is in a monogamous relationship",
      "HIV screening is recommended only if he reports high-risk behaviors",
      "Offer routine HIV screening, as all adults should be screened at least once regardless of risk factors",
      "Defer HIV screening until he reports symptoms suggestive of immunodeficiency"
    ],
    "correct": 2,
    "explanation": "Current guidelines recommend routine HIV screening for ALL adults aged 15-65 years at least once, regardless of risk factors or perceived risk. This opt-out approach helps identify undiagnosed infections and reduces stigma associated with testing. Option A is incorrect because monogamous status does not eliminate the need for at least one baseline screening. Option B is incorrect because risk-based screening alone misses many cases; universal screening is the standard. Option D is incorrect because waiting for symptoms would miss the opportunity for early diagnosis during the prolonged asymptomatic period of HIV infection.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 80,
    "category": "STI",
    "subcategory": "HIV",
    "stem": "A 35-year-old female presents after receiving a positive HIV antigen/antibody (Ag/Ab) screening test, which has been confirmed with a supplemental HIV-1/HIV-2 differentiation assay. Her CD4 count returns at 145 cells/mm3 and she reports a 15-pound unintentional weight loss over the past 3 months, persistent oral candidiasis, and chronic fatigue. Based on these findings, which of the following is the most accurate assessment?",
    "options": [
      "She has HIV infection without AIDS and can be managed in the primary care setting with antiretroviral therapy",
      "She has AIDS based on her CD4 count below 200 cells/mm3 and should be referred for specialized HIV management",
      "She should undergo repeat Ag/Ab testing in 3 months to confirm the diagnosis before referral",
      "Her CD4 count is consistent with early HIV infection and routine monitoring is sufficient at this time"
    ],
    "correct": 1,
    "explanation": "This patient meets the criteria for AIDS (Acquired Immunodeficiency Syndrome), defined as HIV infection with a CD4 count below 200 cells/mm3 and/or the presence of AIDS-defining conditions. Her CD4 of 145 cells/mm3 clearly falls below the 200 threshold. The FNP's role is to diagnose and refer for specialized management, as FNPs are not expected to manage HIV medications. Option A is incorrect because her CD4 count qualifies her for an AIDS diagnosis, and HIV management requires specialist referral. Option C is incorrect because the diagnosis has already been confirmed with a supplemental assay. Option D is incorrect because a CD4 of 145 is critically low and represents advanced disease, not early infection.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 81,
    "category": "STI",
    "subcategory": "STI Screening and 5 Ps",
    "stem": "A 21-year-old female presents to the college health clinic for a routine gynecologic visit. She is sexually active. The FNP plans to conduct a comprehensive sexual health history using a structured framework. Which of the following represents the correct components of the '5 Ps' of sexual health assessment?",
    "options": [
      "Pain, Periods, Pap smears, Partners, Pregnancy",
      "Partners, Practices, Protection from STIs, Past STIs, Pregnancy prevention",
      "Partners, Positions, Protection, Prescriptions, Pap smears",
      "Pain, Partners, Protection, Past medical history, Pregnancy"
    ],
    "correct": 1,
    "explanation": "The 5 Ps of sexual health assessment are: Partners (number, gender of partners), Practices (types of sexual activity: vaginal, anal, oral), Protection from STIs (barrier method use), Past STIs (history of previous STIs), and Pregnancy prevention (contraception use). This structured approach ensures a comprehensive, non-judgmental sexual history. Option A is incorrect because Pain, Periods, and Pap smears, while relevant to gynecologic care, are not part of the 5 Ps framework. Options C and D include elements like Positions, Prescriptions, and Past medical history that are not components of this specific STI screening tool.",
    "source": "STI Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 82,
    "category": "STI",
    "subcategory": "STI Screening and 5 Ps",
    "stem": "A 24-year-old male presents to the clinic requesting STI screening. Using the 5 Ps framework, the FNP asks about his sexual practices. He reports having vaginal and receptive anal intercourse with male and female partners. He uses condoms 'sometimes' and has had 4 partners in the past 6 months. He has a history of chlamydia treated 1 year ago. Based on the 'Protection' component of the 5 Ps, which follow-up question is most appropriate?",
    "options": [
      "Have you ever been tested for syphilis before?",
      "What method of birth control does your female partner use?",
      "How consistently do you use condoms, and do you use them for all types of sexual contact including oral and anal sex?",
      "How many lifetime sexual partners have you had?"
    ],
    "correct": 2,
    "explanation": "The 'Protection' component of the 5 Ps specifically assesses barrier method use for STI prevention. Asking about the consistency of condom use across all types of sexual contact (vaginal, anal, and oral) directly addresses this component. Option A relates to 'Past STIs,' not Protection. Option B relates to 'Pregnancy prevention,' which is a separate P. Option D relates to the 'Partners' component. This patient's inconsistent condom use and multiple partners of both sexes place him at significant risk, making the Protection assessment particularly important for targeted risk-reduction counseling.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 83,
    "category": "STI",
    "subcategory": "STI Screening and 5 Ps",
    "stem": "A 27-year-old female presents to the FNP clinic and states, 'I think I need to get tested for everything.' She reports a new male sexual partner of 2 months, a prior history of gonorrhea 3 years ago, and inconsistent condom use. She uses an IUD for contraception. The FNP performs a comprehensive STI screening. Which combination of screening tests is most appropriate for this patient?",
    "options": [
      "NAAT for chlamydia and gonorrhea only",
      "NAAT for chlamydia and gonorrhea, RPR for syphilis, and HIV Ag/Ab testing",
      "RPR for syphilis and wet mount for trichomoniasis only",
      "HIV Ag/Ab testing and hepatitis B surface antigen only"
    ],
    "correct": 1,
    "explanation": "A comprehensive STI screening for a sexually active young woman with risk factors should include NAAT testing for chlamydia and gonorrhea (the most common bacterial STIs), RPR for syphilis screening, and HIV Ag/Ab (ELISA) testing, which is recommended for all adults. Option A is incomplete because it omits syphilis and HIV screening. Option C omits the most common bacterial STIs (chlamydia and gonorrhea) and HIV. Option D omits screening for the most prevalent bacterial STIs. Her risk factors, including a new partner, prior STI history, and inconsistent condom use, support the need for comprehensive screening.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 84,
    "category": "STI",
    "subcategory": "Co-treatment Principles",
    "stem": "A 23-year-old female presents with purulent vaginal discharge and dysuria. NAAT results return positive for Neisseria gonorrhoeae. The chlamydia NAAT result is still pending. The patient is anxious and asks to begin treatment today. What is the most appropriate course of action?",
    "options": [
      "Treat with IM ceftriaxone only and wait for the chlamydia result before adding doxycycline",
      "Treat with doxycycline only since chlamydia is more common than gonorrhea",
      "Treat with IM ceftriaxone plus doxycycline now, without waiting for the chlamydia result",
      "Delay all treatment until both NAAT results are finalized"
    ],
    "correct": 2,
    "explanation": "When gonorrhea is diagnosed, the standard of care is to empirically co-treat for chlamydia with doxycycline regardless of the chlamydia test result. This is because chlamydia and gonorrhea co-infection is extremely common, and waiting for results risks loss to follow-up and continued transmission. Option A is incorrect because delaying chlamydia treatment until results are available violates co-treatment principles. Option B is incorrect because doxycycline alone does not treat gonorrhea. Option D is incorrect because delaying treatment for a confirmed gonorrhea infection is inappropriate, especially given the risk of complications and ongoing transmission.",
    "source": "STI Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 85,
    "category": "STI",
    "subcategory": "Co-treatment Principles",
    "stem": "A 31-year-old male presents with thick, greenish urethral discharge. NAAT is positive for both Neisseria gonorrhoeae and Chlamydia trachomatis. He is treated with IM ceftriaxone 500 mg and doxycycline 100 mg PO BID for 7 days. He reports his female partner of 4 months has no symptoms. He asks if his partner needs to be evaluated. Additionally, the FNP recalls that his wet mount was also positive for Trichomonas vaginalis, which was initially overlooked. What is the most comprehensive and appropriate management plan?",
    "options": [
      "No further action is needed since the patient has been fully treated for all three infections",
      "Add metronidazole for the patient's trichomoniasis and notify his partner about the gonorrhea and chlamydia only",
      "Add metronidazole for the patient's trichomoniasis and ensure his partner is evaluated and treated for all identified infections, including concurrent trichomoniasis treatment for the partner",
      "Treat the patient with metronidazole only if his partner tests positive for trichomoniasis"
    ],
    "correct": 2,
    "explanation": "This question tests two key co-treatment principles simultaneously. First, the patient needs metronidazole added to treat the overlooked trichomoniasis. Second, and critically, the partner MUST be treated for trichomoniasis (always treat the partner) and should be evaluated for gonorrhea and chlamydia as well. Option A is incorrect because the trichomoniasis remains untreated and the partner has not been addressed. Option B is incorrect because it fails to include partner treatment for trichomoniasis, which is mandatory. Option D is incorrect because trichomoniasis partner treatment is always required regardless of the partner's test results, and the patient himself still needs to be treated. This scenario integrates the gonorrhea-chlamydia co-treatment principle with the trichomoniasis partner-treatment principle.",
    "source": "STI Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 86,
    "category": "Contraception",
    "subcategory": "Estrogen Contraindications",
    "stem": "A 36-year-old woman who smokes 10 cigarettes per day presents requesting oral contraceptive pills. She has no other medical history. Using the MASH VL mnemonic for estrogen contraindications, which factor in this patient makes combined hormonal contraceptives (CHCs) contraindicated?",
    "options": [
      "Her age alone",
      "Her smoking history alone",
      "Age 35 or older AND smoking combined",
      "CHCs are not contraindicated in this patient"
    ],
    "correct": 2,
    "explanation": "The MASH VL mnemonic identifies estrogen contraindications: Migraine with Aura, Age ≥35 + Smoking, History of VTE, Very high BP (uncontrolled HTN), and Liver disease (active). The key is that age ≥35 PLUS smoking is the contraindication -- neither factor alone disqualifies a patient. This patient is 36 and smokes, meeting this criterion. She should be offered progestin-only methods or non-hormonal options instead. Age alone (option A) or smoking alone (option B) would not be absolute contraindications to CHCs.",
    "source": "Contraception Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 87,
    "category": "Contraception",
    "subcategory": "Estrogen Contraindications",
    "stem": "A 28-year-old woman with a history of migraine with visual aura presents requesting birth control. She is otherwise healthy and a non-smoker. Which contraceptive method is most appropriate?",
    "options": [
      "Combined oral contraceptive pill",
      "Contraceptive patch (Xulane)",
      "Progestin-only pill (mini-pill) or hormonal IUD",
      "Vaginal ring (NuvaRing)"
    ],
    "correct": 2,
    "explanation": "Migraine WITH aura is a contraindication to all estrogen-containing contraceptives (MASH VL mnemonic) due to increased stroke risk. The combined pill (option A), patch (option B), and ring (option D) all contain estrogen and are contraindicated. Progestin-only methods (mini-pill, DMPA, implant, hormonal IUD) or non-hormonal methods (copper IUD) are appropriate alternatives. Importantly, migraine WITHOUT aura is NOT a contraindication to combined hormonal contraceptives -- the aura is the distinguishing factor.",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 88,
    "category": "Contraception",
    "subcategory": "Estrogen Contraindications",
    "stem": "A 42-year-old woman with a history of deep vein thrombosis (DVT) 2 years ago presents requesting contraception. She completed anticoagulation therapy and has no current VTE. She does not smoke. Which of the following is the most appropriate contraceptive option?",
    "options": [
      "Combined oral contraceptive pill",
      "Contraceptive patch",
      "Copper IUD or progestin-only implant",
      "Vaginal ring"
    ],
    "correct": 2,
    "explanation": "A history of VTE (venous thromboembolism) is a contraindication to all estrogen-containing contraceptives per the MASH VL mnemonic, as estrogen increases clotting risk. The combined pill (option A), patch (option B), and ring (option D) all contain estrogen. Appropriate options include non-estrogen methods: copper IUD (non-hormonal), progestin-only implant, progestin-only pills, hormonal IUD, or DMPA. The copper IUD is an excellent choice as it provides highly effective, long-acting, hormone-free contraception.",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 89,
    "category": "Contraception",
    "subcategory": "LARC and Adolescents",
    "stem": "A 16-year-old sexually active female presents requesting contraception. She has difficulty remembering to take daily medications. She has no contraindications to any method. According to current guidelines, which category of contraception is recommended as first-line for adolescents?",
    "options": [
      "Combined oral contraceptive pills",
      "Condoms alone",
      "Long-acting reversible contraception (LARC) such as IUD or implant",
      "Depot medroxyprogesterone acetate (DMPA) injection"
    ],
    "correct": 2,
    "explanation": "LARC methods (IUDs and implants) are recommended as first-line contraception for adolescents by ACOG and the AAP. LARC methods have the highest efficacy because they are not user-dependent, addressing the common adherence challenges faced by teens. Combined OCPs (option A) require daily adherence, which this patient has difficulty with. Condoms alone (option B) have high typical-use failure rates. DMPA injections (option D) require office visits every 3 months and are associated with weight gain and decreased bone density, making them less ideal as first-line for adolescents.",
    "source": "Contraception Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 90,
    "category": "Contraception",
    "subcategory": "Combined Hormonal Contraceptives",
    "stem": "A 22-year-old healthy, non-smoking woman presents with both acne and painful periods (dysmenorrhea). She is sexually active and desires contraception. She has no contraindications to estrogen. Which contraceptive method would address all of her concerns?",
    "options": [
      "Copper IUD",
      "Combined oral contraceptive pills",
      "Progestin-only pill",
      "Condoms"
    ],
    "correct": 1,
    "explanation": "Combined oral contraceptive pills (CHCs) are an excellent choice for this patient because they address multiple concerns: effective contraception, improvement of acne through anti-androgen effects, and reduction of dysmenorrhea by suppressing ovulation and thinning the endometrium. The copper IUD (option A) provides excellent contraception but may worsen dysmenorrhea and does not improve acne. Progestin-only pills (option C) are less effective for acne and dysmenorrhea. Condoms (option D) provide STI protection but do not address acne or painful periods.",
    "source": "Contraception Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 91,
    "category": "Contraception",
    "subcategory": "IUD Comparison",
    "stem": "A 29-year-old woman is deciding between a hormonal IUD and a copper IUD. She currently experiences heavy menstrual bleeding that significantly impacts her quality of life. She has no desire for pregnancy for at least 5 years. Which IUD type would be most appropriate, and why?",
    "options": [
      "Copper IUD because it lasts longer (10-12 years)",
      "Hormonal IUD because it decreases menstrual bleeding",
      "Either IUD is equally appropriate for heavy menstrual bleeding",
      "Neither IUD is appropriate; she should use combined oral contraceptive pills"
    ],
    "correct": 1,
    "explanation": "The hormonal IUD (levonorgestrel-releasing, e.g., Mirena) is the better choice for a patient with heavy menstrual bleeding because it significantly decreases menstrual flow -- many women experience very light periods or amenorrhea. The copper IUD (option A) actually INCREASES menstrual bleeding and cramping, which would worsen her symptoms. The two IUDs are not equivalent for bleeding (option C). While OCPs (option D) can reduce bleeding, the hormonal IUD is more effective for this indication and provides superior long-acting contraception.",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 92,
    "category": "Contraception",
    "subcategory": "Emergency Contraception",
    "stem": "A 20-year-old woman presents 4 days (96 hours) after unprotected intercourse requesting emergency contraception. She has no contraindications to any method. Which of the following is the MOST effective emergency contraceptive option for this patient?",
    "options": [
      "Levonorgestrel (Plan B) 1.5 mg single dose",
      "Combined oral contraceptive pills (Yuzpe regimen)",
      "Copper IUD insertion",
      "Ulipristal acetate (Ella) 30 mg single dose"
    ],
    "correct": 2,
    "explanation": "The copper IUD is the MOST effective form of emergency contraception, with a failure rate of less than 1% when inserted within 5 days of unprotected intercourse. It also provides ongoing long-term contraception for up to 10-12 years. Levonorgestrel/Plan B (option A) is only effective up to 72 hours (3 days) and its efficacy decreases after that. Ulipristal/Ella (option D) is effective up to 5 days but is less effective than the copper IUD. The Yuzpe regimen (option B) is the least effective EC option and has more side effects.",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 93,
    "category": "Contraception",
    "subcategory": "Emergency Contraception",
    "stem": "A 24-year-old woman presents to the clinic 36 hours after a condom broke during intercourse. She wants emergency contraception and prefers an oral option that is available over-the-counter. What is the most appropriate recommendation?",
    "options": [
      "Ulipristal acetate (Ella) - available OTC",
      "Levonorgestrel (Plan B) 1.5 mg single dose - available OTC",
      "Mifepristone 200 mg - available OTC",
      "Combined estrogen-progestin pills (Yuzpe regimen) - available OTC"
    ],
    "correct": 1,
    "explanation": "Levonorgestrel (Plan B) is the OTC emergency contraceptive option, effective when taken within 72 hours (3 days) of unprotected intercourse. At 36 hours post-exposure, this is within the effective window. Ulipristal/Ella (option A) is effective up to 5 days but requires a PRESCRIPTION and is not OTC. Mifepristone (option C) is used for medical abortion, not emergency contraception, and is not OTC. The Yuzpe regimen (option D) uses regular birth control pills but is not a standard OTC product and is less effective with more side effects.",
    "source": "Contraception Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 94,
    "category": "Contraception",
    "subcategory": "Postpartum Contraception",
    "stem": "A 30-year-old woman who is 2 weeks postpartum and breastfeeding presents to discuss contraception. She previously used combined oral contraceptive pills. When can she safely resume estrogen-containing contraception?",
    "options": [
      "Immediately, since she was using them before pregnancy",
      "At 2 weeks postpartum",
      "Not until 3-6 weeks postpartum at the earliest",
      "Not until she stops breastfeeding entirely"
    ],
    "correct": 2,
    "explanation": "Estrogen-containing contraceptives should be avoided in the postpartum period for at least 3-6 weeks due to the elevated risk of venous thromboembolism (VTE) in the early postpartum period. Estrogen can further increase this clotting risk. Additionally, estrogen may decrease breast milk supply. Progestin-only methods (mini-pill, implant, hormonal IUD, DMPA) are safe to use in the immediate postpartum period and are compatible with breastfeeding. She does not need to stop breastfeeding entirely (option D) before using estrogen, but should wait the recommended timeframe.",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 95,
    "category": "Contraception",
    "subcategory": "Progestin-Only Methods",
    "stem": "A 33-year-old breastfeeding woman at her 6-week postpartum visit requests contraception. She has a history of migraine with aura. Which contraceptive method is MOST appropriate given her medical history?",
    "options": [
      "Combined oral contraceptive pill",
      "Contraceptive patch",
      "Progestin-only implant (Nexplanon)",
      "Vaginal ring"
    ],
    "correct": 2,
    "explanation": "This patient has TWO contraindications to estrogen: migraine with aura and breastfeeding (if <6 weeks, though she is at 6 weeks). The progestin-only implant (Nexplanon) is an excellent choice because it avoids estrogen entirely, is compatible with breastfeeding, is one of the most effective LARC methods (>99%), and lasts up to 3 years. The combined pill (option A), patch (option B), and ring (option D) all contain estrogen and are contraindicated in patients with migraine with aura regardless of breastfeeding status.",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 96,
    "category": "Contraception",
    "subcategory": "DMPA",
    "stem": "A 19-year-old woman has been receiving depot medroxyprogesterone acetate (DMPA/Depo-Provera) injections for 2 years. She presents for her next injection and asks about potential long-term side effects. Which of the following is a recognized concern with prolonged DMPA use?",
    "options": [
      "Increased risk of ovarian cancer",
      "Decreased bone mineral density",
      "Permanent infertility after discontinuation",
      "Increased risk of venous thromboembolism"
    ],
    "correct": 1,
    "explanation": "DMPA is associated with decreased bone mineral density with prolonged use, particularly concerning for adolescents who are still building peak bone mass. Other common side effects include weight gain and irregular bleeding. This is why DMPA is not typically first-line for adolescents despite being effective. Bone density generally recovers after discontinuation. DMPA does not increase ovarian cancer risk (option A). Fertility returns after discontinuation, though it may be delayed by several months (option C). Progestin-only methods do not carry the VTE risk associated with estrogen (option D).",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 97,
    "category": "Contraception",
    "subcategory": "Contraception Decision-Making",
    "stem": "A 25-year-old woman presents requesting contraception. She has uncontrolled hypertension (BP 162/98), takes no medications, and is a non-smoker. She prefers a hormonal method. Which of the following is the most appropriate option?",
    "options": [
      "Combined oral contraceptive pills",
      "Contraceptive patch",
      "Hormonal IUD (levonorgestrel)",
      "Vaginal ring"
    ],
    "correct": 2,
    "explanation": "Uncontrolled hypertension (Very high BP) is a contraindication to estrogen-containing methods per the MASH VL mnemonic. The combined pill (option A), patch (option B), and ring (option D) all contain estrogen. The hormonal IUD releases progestin locally with minimal systemic absorption and is safe for patients with hypertension. Other acceptable options include the progestin-only pill, implant, and DMPA. The contraception decision steps apply: rule out pregnancy, identify contraindications (uncontrolled HTN), then choose the safest effective method.",
    "source": "Contraception Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 98,
    "category": "Contraception",
    "subcategory": "Special Populations",
    "stem": "A 40-year-old obese woman (BMI 38) requests contraception. She has no other medical conditions, does not smoke, and has no history of VTE. She is concerned about effectiveness. Which contraceptive method would be MOST reliable for this patient?",
    "options": [
      "Contraceptive patch (Xulane)",
      "Combined oral contraceptive pills",
      "IUD or subdermal implant",
      "Progestin-only pills"
    ],
    "correct": 2,
    "explanation": "For obese patients, IUDs and subdermal implants are preferred because their efficacy is NOT affected by body weight. The contraceptive patch (option A) is specifically noted to be less effective in women weighing over 198 lbs. Oral contraceptive pills (option B) may have slightly reduced efficacy with higher BMI due to altered drug metabolism, and adherence challenges further reduce typical-use effectiveness. Progestin-only pills (option D) require strict timing (same 3-hour window daily), making adherence difficult. LARC methods eliminate user-dependent variability.",
    "source": "Contraception Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 99,
    "category": "Contraception",
    "subcategory": "Contraception Decision-Making",
    "stem": "A 22-year-old woman presents to initiate contraception. The FNP reviews the contraception decision steps. What is the correct order of the decision-making process?",
    "options": [
      "Consider patient preference → choose method → rule out pregnancy → identify contraindications",
      "Rule out pregnancy → identify contraindications → choose safest effective method → consider patient preference",
      "Identify contraindications → rule out pregnancy → consider patient preference → choose method",
      "Choose method based on age → rule out pregnancy → check for side effects → prescribe"
    ],
    "correct": 1,
    "explanation": "The contraception decision steps in order are: (1) Rule out pregnancy first, (2) Identify contraindications (MASH VL for estrogen, other medical conditions), (3) Choose the safest effective method based on the clinical picture, and (4) Consider patient preference within the safe options. Starting with patient preference (option A) may lead to prescribing a contraindicated method. Identifying contraindications before ruling out pregnancy (option C) skips the essential first step. Age-based selection (option D) is not the recommended framework.",
    "source": "Contraception Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 100,
    "category": "Contraception",
    "subcategory": "Migraine and Contraception",
    "stem": "A 30-year-old woman presents requesting contraception. She reports occasional headaches that she describes as 'migraines' but denies any visual aura, numbness, or speech changes preceding them. She is otherwise healthy and a non-smoker. Which of the following statements about her contraceptive options is correct?",
    "options": [
      "All estrogen-containing contraceptives are contraindicated because she has migraines",
      "Combined hormonal contraceptives may be used because migraine WITHOUT aura is not a contraindication to estrogen",
      "She should only use barrier methods due to her migraine history",
      "DMPA is contraindicated in all migraine patients"
    ],
    "correct": 1,
    "explanation": "Migraine WITHOUT aura is NOT a contraindication to combined hormonal contraceptives. The MASH VL mnemonic specifies Migraine with AURA as the contraindication to estrogen. The aura (visual changes, numbness, speech changes) is the key distinguishing factor that increases stroke risk when combined with estrogen. Since this patient has migraine without aura, she may safely use combined hormonal contraceptives. Barrier methods only (option C) is unnecessarily restrictive. DMPA (option D) is a progestin-only method that is safe for all migraine patients.",
    "source": "Contraception Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 101,
    "category": "Diagnostic Testing",
    "subcategory": "Screening Protocols",
    "stem": "A 45-year-old woman presents for her annual well-woman exam. She asks about recommended health screenings. She has no family history of breast cancer and is at average risk. According to USPSTF guidelines, at what age should routine mammography screening begin for average-risk women?",
    "options": [
      "Age 30",
      "Age 40",
      "Age 50",
      "Only if a lump is found on clinical breast exam"
    ],
    "correct": 1,
    "explanation": "USPSTF recommends biennial mammography screening for average-risk women starting at age 40 (updated 2024 recommendation). Earlier guidelines started at age 50, but the recommendation was updated to begin at 40. Screening should continue through age 74. Starting at age 30 (option A) is too early for average-risk women. Waiting until a lump is found (option D) defeats the purpose of screening, which is to detect cancer before it becomes palpable. Women at higher risk may need earlier or more frequent screening.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 102,
    "category": "Diagnostic Testing",
    "subcategory": "Lab Interpretation",
    "stem": "A 50-year-old male presents for routine blood work. His basic metabolic panel shows: Na 140, K 5.8, BUN 45, Creatinine 3.2, Glucose 102. Which of the following is the most concerning finding that requires immediate attention?",
    "options": [
      "Sodium of 140 mEq/L",
      "Potassium of 5.8 mEq/L",
      "Glucose of 102 mg/dL",
      "BUN of 45 mg/dL"
    ],
    "correct": 1,
    "explanation": "A potassium level of 5.8 mEq/L is hyperkalemia and requires immediate attention due to the risk of cardiac arrhythmias and cardiac arrest. Normal potassium is 3.5-5.0 mEq/L. This elevated potassium, combined with the elevated BUN and creatinine, suggests impaired renal function as the likely cause. Sodium of 140 (option A) is normal (135-145). Glucose of 102 (option C) is mildly elevated but not acutely dangerous. While the elevated BUN (option D) is abnormal, hyperkalemia poses the most immediate life-threatening risk and must be addressed first.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 103,
    "category": "Diagnostic Testing",
    "subcategory": "Pregnancy Testing",
    "stem": "A 19-year-old woman presents with amenorrhea for 2 months. She reports irregular cycles and denies sexual activity, though the FNP notes she appears uncomfortable discussing this topic. What is the most appropriate first diagnostic test?",
    "options": [
      "Serum TSH level",
      "Serum prolactin level",
      "Urine pregnancy test (HCG)",
      "Pelvic ultrasound"
    ],
    "correct": 2,
    "explanation": "A pregnancy test (HCG) is ALWAYS the first step in evaluating amenorrhea, regardless of reported sexual history. Patients may not disclose sexual activity due to embarrassment, cultural factors, or other reasons. Pregnancy is the most common cause of amenorrhea in reproductive-age women and must be ruled out before proceeding with further workup. TSH (option A) and prolactin (option B) are part of the amenorrhea workup but come after pregnancy is excluded. Pelvic ultrasound (option D) may be indicated later but is not the first step.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 104,
    "category": "Diagnostic Testing",
    "subcategory": "Imaging Selection",
    "stem": "A 40-year-old male presents with acute severe left flank pain radiating to the groin. He is writhing in pain and has microscopic hematuria on urinalysis. The FNP suspects renal calculi. Which imaging study is the gold standard for confirming this diagnosis?",
    "options": [
      "Abdominal X-ray (KUB)",
      "Renal ultrasound",
      "CT abdomen/pelvis WITHOUT contrast",
      "CT abdomen/pelvis WITH IV contrast"
    ],
    "correct": 2,
    "explanation": "CT abdomen and pelvis WITHOUT contrast is the gold standard for diagnosing renal calculi. It has the highest sensitivity and specificity for detecting kidney stones regardless of composition. Contrast is specifically AVOIDED because it can obscure calcium-containing stones and is unnecessary for stone detection. Abdominal X-ray (option A) misses small and radiolucent stones (uric acid). Renal ultrasound (option B) may miss ureteral stones. CT WITH contrast (option D) can mask stones and adds unnecessary contrast exposure.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 105,
    "category": "Diagnostic Testing",
    "subcategory": "Screening Protocols",
    "stem": "A 60-year-old postmenopausal woman presents with new-onset vaginal bleeding. She has not had a period for 8 years and takes no hormone replacement therapy. What is the most appropriate initial diagnostic study?",
    "options": [
      "Pap smear",
      "Transvaginal ultrasound to assess endometrial thickness",
      "CT abdomen and pelvis with contrast",
      "Serum CA-125 level"
    ],
    "correct": 1,
    "explanation": "Postmenopausal bleeding must be evaluated to rule out endometrial cancer. Transvaginal ultrasound to assess endometrial thickness is the appropriate initial diagnostic study. An endometrial thickness >4 mm in a postmenopausal woman warrants endometrial biopsy. A Pap smear (option A) screens for cervical cancer, not endometrial cancer. CT (option C) is not the initial study for evaluating postmenopausal bleeding. CA-125 (option D) is a tumor marker for ovarian cancer, not the standard initial test for postmenopausal bleeding.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "medium"
  },
  {
    "id": 106,
    "category": "Diagnostic Testing",
    "subcategory": "STI Testing",
    "stem": "A 22-year-old sexually active female presents for routine STI screening. She is asymptomatic. The FNP orders NAAT testing. Which of the following statements about NAAT is correct?",
    "options": [
      "NAAT requires a blood sample for accurate results",
      "NAAT is the gold standard for diagnosing chlamydia and gonorrhea and can be performed on urine or swab specimens",
      "NAAT is only useful when the patient has active symptoms",
      "NAAT can definitively diagnose syphilis"
    ],
    "correct": 1,
    "explanation": "Nucleic acid amplification test (NAAT) is the gold standard diagnostic test for both chlamydia and gonorrhea. It offers the highest sensitivity and specificity and can be performed on urine samples or cervical/vaginal/urethral swab specimens -- no blood draw needed (option A). NAAT is effective for both symptomatic and asymptomatic patients (option C), making it ideal for routine screening. Syphilis (option D) is diagnosed with serologic testing (RPR/VDRL for screening, FTA-ABS/TP-PA for confirmation), not NAAT.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 107,
    "category": "Diagnostic Testing",
    "subcategory": "Syphilis Testing",
    "stem": "A 35-year-old male has a reactive RPR with a titer of 1:64. A confirmatory FTA-ABS test is positive. He is treated for primary syphilis with IM penicillin G. At his 6-month follow-up, his RPR titer is 1:8. How should the FNP interpret this result?",
    "options": [
      "Treatment failure; the RPR should be non-reactive by now",
      "Reinfection requiring retreatment",
      "Adequate treatment response; a fourfold decline in titer indicates successful treatment",
      "False positive; repeat FTA-ABS is needed"
    ],
    "correct": 2,
    "explanation": "RPR is a non-treponemal test used for both diagnosis and monitoring treatment response in syphilis. A fourfold or greater decline in titer (at least a 2-dilution drop) within 6-12 months indicates successful treatment. This patient's titer dropped from 1:64 to 1:8, representing a fourfold decline (three dilutions), confirming adequate response. The RPR may never become completely non-reactive (option A), especially in late syphilis. Reinfection (option B) would show a rising, not declining, titer. The FTA-ABS (option D) is a confirmatory treponemal test that typically remains positive for life and is not used for monitoring.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 108,
    "category": "Diagnostic Testing",
    "subcategory": "Lab Interpretation",
    "stem": "A nurse practitioner is reviewing lab results for a patient with suspected kidney disease. The results show: GFR 35 mL/min, hemoglobin 9.0 g/dL, phosphorus 6.8 mg/dL (high), calcium 8.0 mg/dL (low), and bilateral small kidneys on renal ultrasound. These findings are most consistent with which stage and type of kidney disease?",
    "options": [
      "Acute kidney injury",
      "CKD Stage 3b (GFR 30-44)",
      "CKD Stage 2 (GFR 60-89)",
      "Nephrotic syndrome"
    ],
    "correct": 1,
    "explanation": "This patient has CKD Stage 3b based on GFR of 35 mL/min (Stage 3b = GFR 30-44). The classic CKD triad is present: anemia (low Hgb from decreased erythropoietin), hyperphosphatemia with hypocalcemia (from impaired phosphorus excretion and vitamin D metabolism), and small kidneys on imaging (chronic scarring). AKI (option A) would show normal-sized kidneys, no anemia, and normal calcium/phosphorus. Stage 2 (option C) requires GFR 60-89, which doesn't match. Nephrotic syndrome (option D) is characterized by massive proteinuria and edema, not these findings.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "hard"
  },
  {
    "id": 109,
    "category": "Diagnostic Testing",
    "subcategory": "Screening Protocols",
    "stem": "A 40-year-old man presents for a routine physical. He has never been tested for HIV and reports being in a monogamous heterosexual relationship for 15 years. He asks whether HIV testing is necessary given his low-risk status. What is the most appropriate response?",
    "options": [
      "HIV testing is not recommended for patients in monogamous relationships",
      "HIV testing is only recommended for patients with identified risk factors",
      "All adults aged 15-65 should be screened for HIV at least once, regardless of risk factors",
      "HIV testing should be deferred until he reaches age 50"
    ],
    "correct": 2,
    "explanation": "Current USPSTF guidelines recommend routine opt-out HIV screening for all adults aged 15-65 at least once, regardless of perceived risk. This universal screening approach reduces stigma, identifies undiagnosed infections that may have been acquired before the current relationship, and is supported by evidence showing that risk-based screening alone misses many cases. Being in a monogamous relationship (option A) or lacking identified risk factors (option B) does not eliminate the recommendation for baseline screening. There is no reason to defer until age 50 (option D).",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "easy"
  },
  {
    "id": 110,
    "category": "Diagnostic Testing",
    "subcategory": "Imaging Selection",
    "stem": "A 4-year-old boy is brought to the clinic with gross hematuria. He is well-appearing, afebrile, and has no abdominal pain. There is no history of trauma. The FNP wants to evaluate the urinary tract. Which imaging study is most appropriate as the initial evaluation?",
    "options": [
      "CT abdomen and pelvis with contrast",
      "Intravenous pyelogram (IVP)",
      "Renal ultrasound",
      "Voiding cystourethrogram (VCUG)"
    ],
    "correct": 2,
    "explanation": "In children with hematuria, renal ultrasound is the preferred initial imaging study. It is non-invasive, involves no radiation exposure (critical in pediatric patients), and can assess kidney size, structure, hydronephrosis, masses, and stones. CT with contrast (option A) exposes the child to ionizing radiation and iodinated contrast, making it inappropriate as a first-line study in children. IVP (option B) also involves radiation and contrast and has been largely replaced by other modalities. VCUG (option D) is used to evaluate vesicoureteral reflux, not the initial workup for hematuria.",
    "source": "Diagnostic Testing Study Guide",
    "difficulty": "medium"
  }
]
};
