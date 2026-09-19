# Bridge Course: Modules 3 & 4 Course Specifications & Session Plans
**Common Foundation for Master of Public Health (MPH) & Master in Hospital Administration (MHA)**  
*Ramaiah School of Public Health (RSPH) / Faculty of Life & Allied Health Sciences, MSRUAS*  
*Curriculum Mapping:* PHC503A (MPH) $\leftrightarrow$ HAC504C Units 1–2 (MHA) | PHC505A (MPH) $\leftrightarrow$ HAC511C Units 1–3 (MHA)

---

## Pedagogical Synergies: Quantitative Foundations in Population & Hospital Health

Quantitative methods are the bedrock of both **Public Health** and **Hospital Administration**:
- In **Public Health**, epidemiology and biostatistics are used to measure disease burden in populations, identify risk factors, evaluate vaccine effectiveness, and allocate public health resources.
- In **Hospital Administration**, the exact same statistical tools and epidemiological measures are used to evaluate **Hospital Acquired Infections (HAI)**, bed occupancy and length of stay (LOS), surgical site infection (SSI) surveillance, readmission rates, clinical audits, and diagnostic test utility in clinical laboratories.

```mermaid
flowchart TD
    subgraph QUANTITATIVE CORE
        D["Health Data: Variable Types & Scales of Measurement"] --> DS["Descriptive Statistics: Central Tendency & Dispersion"]
        DS --> P["Probability Distributions & The Normal Curve"]
        P --> I["Inferential Logic: Sampling, p-values, 95% Confidence Intervals"]
    end

    subgraph EPIDEMIOLOGICAL CORE
        E1["Natural History & Disease Triad"] --> E2["Measures: Ratios, Rates, Prevalence vs. Incidence"]
        E2 --> E3["Study Designs: Cross-sectional, Case-Control, Cohort, RCTs"]
        E3 --> E4["Diagnostic & Screening Metrics: Sensitivity, Specificity, PPV, NPV"]
    end

    QUANTITATIVE CORE --> APP["Applied Health Inquiries"]
    EPIDEMIOLOGICAL CORE --> APP

    APP --> M_APP["MPH Application: Community Outbreak Investigation & Disease Burden Modeling"]
    APP --> H_APP["MHA Application: Hospital Infection Control, NABH Quality Indicators & Diagnostic Lab Performance"]
```

---

# MODULE 3: Foundations of Epidemiology & Disease Measurement

- **Target Hours:** 10 Hours (5 Hours Interactive Theory + 5 Hours Practical Problem-Solving & Case Exercises)
- **Primary Courses Mapped:**
  - MPH: `PHC503A` (Epidemiology)
  - MHA: `HAC504C` (Epidemiology and Public Health Administration - Units 1 & 2)
- **Essential Readings:**
  - *Gordis Epidemiology (7th Ed., Celentano & Szklo)* – Chapters 2 (Transmission), 3–4 (Measuring Disease Occurrence & Mortality), 5–6 (Screening & Diagnostic Tests), 7–10 (Study Designs).
  - *WHO Basic Epidemiology (Beaglehole, Bonita, Kjellström)* – Chapters 2 (Measuring health and disease) & 3 (Types of study).

### Learning Outcomes (COs)
At the end of this module, the student will be able to:
1. Explain the **epidemiological triad** (agent-host-environment) and model disease transmission dynamics.
2. Differentiate and calculate **incidence** (cumulative incidence vs. incidence rate) and **prevalence** (point vs. period) and describe their mathematical relationship.
3. Contrast observational (cross-sectional, case-control, cohort) and experimental (RCT) study designs, identifying when each is appropriate.
4. Calculate and interpret epidemiological association metrics: **Relative Risk (RR)** and **Odds Ratio (OR)**.
5. Calculate and evaluate diagnostic and screening test performance: **Sensitivity, Specificity, Positive Predictive Value (PPV), and Negative Predictive Value (NPV)**, including the effect of disease prevalence on predictive values.
6. Identify common sources of **bias** (selection, information) and **confounding** in health datasets.

---

### Session-by-Session Breakdown (Module 3)

#### Session 3.1: Concepts of Causation & Disease Transmission (2 Hours)
- **Theory (1 Hour):**
  - Definition and scope of epidemiology: The study of the distribution and determinants of health-related states.
  - Infectious disease transmission: Reservoirs, modes of transmission (direct, indirect, vector-borne, airborne).
  - Epidemiological Triad, Web of Causation, and Rothman’s Causal Pies (sufficient, component, and necessary causes).
  - Incubation period, generation time, basic reproduction number ($R_0$), and herd immunity thresholds.
- **Applied Exercise (1 Hour):**
  - *Case Exercise:* Mapping the transmission tree of an epidemic curve (point-source vs. propagated outbreak) in an enclosed nursing home or hospital ward.

#### Session 3.2: Measures of Morbidity and Mortality (2 Hours)
- **Theory (1 Hour):**
  - Fractions in epidemiology: Ratios, Proportions, and True Rates.
  - Morbidity metrics:
    - **Incidence:** Cumulative Incidence (risk) vs. Incidence Rate (person-time denominator).
    - **Prevalence:** Point prevalence vs. Period prevalence.
    - Steady-state relationship: $\text{Prevalence} \approx \text{Incidence} \times \text{Duration of Disease} \, (P = I \times D)$.
  - Mortality metrics: Crude Death Rate (CDR), Cause-Specific Mortality Rate, Case-Fatality Rate (CFR), Infant Mortality Rate (IMR), Maternal Mortality Ratio (MMR).
- **Practical Numeracy Drill (1 Hour):**
  - *Calculation Workshop:* Students compute hospital-specific surgical site infection (SSI) incidence rates per 1,000 device-days and district-level tuberculosis prevalence rates from provided raw registers.

#### Session 3.3: Overview of Epidemiological Study Designs (2 Hours)
- **Theory (1 Hour):**
  - Taxonomy of designs: Descriptive vs. Analytical; Observational vs. Interventional.
  - **Cross-Sectional Studies:** Snapshot of exposure and outcome; calculating Prevalence Ratios; limitations (temporal ambiguity).
  - **Case-Control Studies:** Selecting cases and controls; retrospective exposure assessment; calculating the **Odds Ratio (OR)**.
  - **Cohort Studies:** Prospective vs. Retrospective; exposure cohorts; follow-up and calculating **Relative Risk (RR)** and **Attributable Risk (AR)**.
  - **Randomized Controlled Trials (RCTs):** Clinical trials phase I–IV; randomization, blinding, and intention-to-treat analysis.
- **Classroom Comparative Matrix (1 Hour):**
  - Filling a comparative matrix evaluating cost, duration, rare disease suitability, rare exposure suitability, and susceptibility to recall bias across designs.

#### Session 3.4: Screening & Diagnostic Test Evaluation (2 Hours)
- **Theory (1 Hour):**
  - Screening vs. Diagnostic testing: Principles of Wilson and Jungner criteria for screening programs.
  - The $2 \times 2$ Diagnostic Contingency Table:
    - Sensitivity: $TP / (TP + FN)$
    - Specificity: $TN / (TN + FP)$
    - Positive Predictive Value (PPV): $TP / (TP + FP)$
    - Negative Predictive Value (NPV): $TN / (FN + TN)$
  - The profound impact of disease prevalence on PPV (Bayes’ theorem intuition).
- **Interactive Lab (1 Hour):**
  - Rapid Antigen Test vs. RT-PCR for viral infection: Students calculate why a 98% specific test has an abysmal PPV (under 30%) when screened in an asymptomatic population with 0.5% prevalence, but high PPV (>90%) in a hospitalized symptomatic cohort with 30% prevalence.

#### Session 3.5: Bias, Confounding, and Causality Criteria (2 Hours)
- **Theory (1 Hour):**
  - Random error vs. Systematic error.
  - Types of Bias: Selection bias (Berkson’s bias in hospital studies, healthy worker effect), Information/Measurement bias (recall bias, interviewer bias).
  - Confounding: Definition (associated with exposure, independent risk factor for outcome, not on the causal pathway) and methods of control (restriction, matching, stratification, multivariable regression).
  - Bradford Hill criteria for causation (strength, consistency, specificity, temporality, biological gradient, plausibility, coherence, experiment, analogy).
- **Case Discussion (1 Hour):**
  - Critiquing a published hospital study linking coffee consumption to pancreatic cancer (identifying smoking as the classic confounder).

---

# MODULE 4: Biostatistics & Quantitative Data Literacy

- **Target Hours:** 10 Hours (5 Hours Didactic Lectures + 5 Hours Hands-on Calculation & Software Demonstrations)
- **Primary Courses Mapped:**
  - MPH: `PHC505A` (Biostatistics)
  - MHA: `HAC511C` (Biostatistics and Research Methodology - Units 1, 2, 3)
- **Essential Readings:**
  - *Daniel W.W. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (Wiley).*
  - *Medical Statistics Made Easy (3rd Ed., Harris & Taylor).*
  - *Rothman (1998). The Encyclopedia of Biostatistics.*

### Learning Outcomes (COs)
At the end of this module, the student will be able to:
1. Identify variable types and classify data into appropriate **scales of measurement** (Nominal, Ordinal, Interval, Ratio).
2. Calculate and select appropriate **measures of central tendency** (Mean, Median, Mode) and **dispersion** (Variance, Standard Deviation, Interquartile Range) for symmetrical and skewed distributions.
3. Explain the properties and practical utility of the **Normal (Gaussian) Distribution** and the Empirical Rule (68-95-99.7%).
4. Differentiate between probability sampling and non-probability sampling methods and determine their implications for generalizability.
5. Formulate null ($H_0$) and alternative ($H_1$) hypotheses, interpret $p$-values, explain Type I ($\alpha$) and Type II ($\beta$) errors, and interpret **95% Confidence Intervals**.
6. Select the appropriate statistical test for continuous and categorical comparisons ($t$-test, Chi-square, Mann-Whitney $U$, Pearson vs. Spearman correlation).

---

### Session-by-Session Breakdown (Module 4)

#### Session 4.1: Data Types, Scales of Measurement & Data Hygiene (2 Hours)
- **Theory (1 Hour):**
  - What is biostatistics? The science of handling uncertainty and biological variation.
  - Classification of variables:
    - Qualitative/Categorical: Nominal (blood groups, gender), Ordinal (cancer staging, Likert satisfaction scale).
    - Quantitative/Numerical: Discrete (hospital admissions, number of children), Continuous (blood pressure, HbA1c, body weight).
  - Scales of measurement: NOIR hierarchy (Nominal $\rightarrow$ Ordinal $\rightarrow$ Interval $\rightarrow$ Ratio).
  - Data hygiene: Codebooks, handling missing values, identifying outliers, and data cleaning.
- **Hands-on Exercise (1 Hour):**
  - Building a standardized epidemiological and hospital admission data dictionary in Excel/Spreadsheets.

#### Session 4.2: Descriptive Summaries & Visual Display of Data (2 Hours)
- **Theory (1 Hour):**
  - Measures of Central Tendency: Arithmetic Mean (properties, sensitivity to outliers), Median (robust to skewness), Mode (bimodal distributions).
  - Measures of Dispersion: Range, Variance, Standard Deviation ($SD$), Interquartile Range ($IQR = Q_3 - Q_1$).
  - When to use which: Mean $\pm SD$ for normally distributed data vs. Median ($IQR$) for skewed data (e.g., hospital length of stay, income).
  - Graphical representation: Bar charts, Pie charts (and their pitfalls), Histograms, Box-and-Whisker plots, Scatter plots, and Line graphs.
- **Practical Drill (1 Hour):**
  - Calculating Mean, Median, $SD$, and $IQR$ from a sample of 25 ICU patients' lengths of stay; plotting and interpreting a box plot.

#### Session 4.3: Probability & The Normal Distribution (2 Hours)
- **Theory (1 Hour):**
  - Basic concepts of probability: Independent vs. mutually exclusive events; addition and multiplication rules.
  - The Normal Distribution (Gaussian Curve): Symmetrical bell shape, properties ($\text{Mean} = \text{Median} = \text{Mode}$).
  - The 68–95–99.7% Empirical Rule.
  - Standard Normal Distribution and $Z$-score formula: $Z = \frac{X - \mu}{\sigma}$.
  - Sampling distribution of the mean and the **Central Limit Theorem (CLT)**.
  - Standard Error of the Mean ($SEM = \frac{SD}{\sqrt{n}}$): Precision of estimation vs. biological variability ($SD$).
- **Numeracy Drill (1 Hour):**
  - Calculating $Z$-scores to determine what proportion of patients have blood glucose levels exceeding clinical safety thresholds.

#### Session 4.4: Sampling Techniques & Sample Size Foundations (2 Hours)
- **Theory (1 Hour):**
  - Target Population vs. Study Population vs. Sample.
  - Probability Sampling: Simple Random Sampling, Systematic Random Sampling, Stratified Sampling (proportional allocation), Cluster Sampling, Multi-stage Sampling.
  - Non-Probability Sampling: Convenience Sampling, Purposive/Judgmental Sampling, Quota Sampling, Snowball Sampling (hard-to-reach populations).
  - Foundations of Sample Size Estimation: Type I error ($\alpha$), Statistical Power ($1-\beta$), Minimum clinically meaningful difference ($\Delta$), and variance ($\sigma^2$).
- **Interactive Case (1 Hour):**
  - Designing a sampling strategy for a patient satisfaction survey across 15 hospital outpatient departments (MHA) vs. a community vaccination coverage survey across 30 village clusters (MPH).

#### Session 4.5: Principles of Hypothesis Testing & Test Selection (2 Hours)
- **Theory (1 Hour):**
  - Formulating hypotheses: Null Hypothesis ($H_0$) of no difference vs. Alternative Hypothesis ($H_1$).
  - The Decision Matrix in Hypothesis Testing:
    - Type I Error ($\alpha$, false positive) and significance level (typically 0.05).
    - Type II Error ($\beta$, false negative) and Statistical Power ($1 - \beta$, typically 80% or 90%).
  - Demystifying the $p$-value: Probability of observing the data (or more extreme) assuming $H_0$ is true.
  - Confidence Intervals (95% CI): Why CI is superior to $p$-value alone (conveys both statistical significance and clinical magnitude/precision).
  - Decision tree for choosing common statistical tests:
    - Continuous outcome, 2 independent groups: Independent $t$-test (parametric) vs. Mann-Whitney $U$ (non-parametric).
    - Continuous outcome, before-after: Paired $t$-test vs. Wilcoxon signed-rank.
    - Categorical outcome, 2 or more groups: Pearson’s Chi-Square ($\chi^2$) test or Fisher’s Exact test.
    - Correlation: Pearson’s $r$ (linear) vs. Spearman’s $\rho$ (monotonic/ranked).
- **Statistical Decision Tree Drill (1 Hour):**
  - Providing students with 8 real-world research questions (e.g., comparing wait times across 2 triage systems, comparing cure rates across 2 antibiotics) and having them defend the appropriate statistical test and interpretation.

---

## Formative Problem Sets & Practical Assessment (Modules 3 & 4)

### Problem Set 1: Epidemiological Measures (Gordis Problem Style)
1. In a district of 500,000 population, 200 cases of Acute Hepatitis were identified between Jan 1 and Dec 31, 2025. 40 of these patients died. Compute the Incidence Rate per 100,000 and the Case Fatality Rate (CFR).
2. A new rapid blood test for hospital sepsis is evaluated in 1,000 ICU patients. 200 patients have blood-culture confirmed sepsis. The rapid test is positive in 180 of the sepsis patients and in 80 of the non-sepsis patients.
   - Construct the $2 \times 2$ contingency table.
   - Calculate Sensitivity, Specificity, PPV, and NPV.
   - If the same test is applied in a general ward where sepsis prevalence is only 2%, what happens to the PPV? Explain the clinical and administrative implications.

### Problem Set 2: Biostatistics & Data Analysis
1. A sample of 10 hospital inpatients had the following recovery days: `[3, 4, 5, 5, 6, 7, 8, 12, 18, 22]`.
   - Calculate the Mean, Median, and Mode.
   - Which measure of central tendency best represents this sample, and why?
   - Calculate the Range and Interquartile Range ($IQR$).
2. A clinical trial comparing Drug A vs. Standard Care for hypertension reports: "Mean reduction in systolic BP with Drug A was 12 mmHg (95% CI: 2.1 to 21.9; $p = 0.02$)".
   - Interpret the 95% Confidence Interval in plain clinical/administrative language.
   - Did the study reject the Null Hypothesis at $\alpha = 0.05$?
