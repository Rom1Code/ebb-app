// Data used in team screen

export const MasculinTeamList = ['SM1','SM2','SM3','MU17','MU17_2','MU15','MU15_2','MU15_3','MU13','MU13_2']
export const FemininTeamList = ['SF1','SF2','SF3','FU18','FU15','FU15_2','FU13','FU11']

export const teamList = ['SM1','SM2','SM3','SF1','SF2','SF3','MU17','MU17_2','FU18','MU15','MU15_2','MU15_3','FU15','FU15_2','MU13',
'MU13_2','FU13','FU11']

// Defini team per category
const seniorMasculin = [{'team': 'SM1', 'label': 'SM1','level' : 'Pré régionale', 'group':'(Poule A)'},{'team': 'SM2', 'label': 'SM2', 'level': 'Division 3','group':'(Poule B)'},{'team': 'SM3', 'label': 'SM3', 'level': 'Division 5','group':'(Poule C)'}]
const seniorFeminin = [{'team': 'SF1', 'label': 'SF1', 'level' : 'Pré nationale', 'group':'(Poule B)'},{'team': 'SF2', 'label': 'SF2', 'level': 'Pré régionale','group':'(Poule A)'},{'team': 'SF3', 'label': 'SF3', 'level': 'Division 3','group':'(Poule D)'}]
const U17Masculin = [{'team':'MU17_phase1', 'label': 'U17', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule B)'},{'team':'MU17_phase2', 'label': 'U17', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule B)'},
{'team':'MU17_2_phase1', 'label': 'U17-2', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule D)'},{'team':'MU17_2_phase2', 'label': 'U17-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule B)'}]
const U18Feminin = [{'team':'FU18_phase1', 'label': 'U18', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule B)'},{'team':'FU18_phase2', 'label': 'U18', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule A)'}]
const U15Masculin = [{'team':'MU15_phase1', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule C)'},{'team':'MU15_phase2', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule B)'},
{'team':'MU15_2_phase1', 'label': 'U15-2', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule B)'},{'team':'MU15_2_phase2', 'label': 'U15-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule C)'},{'team':'MU15_3_phase2', 'label': 'U15-3', 'level': 'Divison 3' ,'group': 'Phase 2 (Poule C)'}]
const U15Feminin = [{'team':'FU15_phase1', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule A)'},{'team':'FU15_phase2', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule A)'}, {'team':'FU15_2_phase1', 'label': 'U15-2', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule E)'}, {'team':'FU15_2_phase2', 'label': 'U15-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule D)'}]
const U13Masculin = [{'team':'MU13_phase1', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule C)'},{'team':'MU13_phase2', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule B)'},
{'team':'MU13_2_phase1', 'label': 'U13-2', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule F)'},{'team':'MU13_2_phase2', 'label': 'U13-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule C)'}]
const U13Feminin = [{'team':'FU13_phase1', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule A)'},{'team':'FU13_phase2', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule A)'}]
const U11Feminin = [{'team':'FU11_phase1', 'label': 'U11', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule A)'},{'team':'FU11_phase2', 'label': 'U11', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule A)'}]

// Object with all category + label name
export const teamCat = [{'cat': 'Senior Masculin', 'teamList': seniorMasculin}, {'cat': 'Senior Feminine', 'teamList': seniorFeminin}, {'cat': 'U17 Masculin', 'teamList': U17Masculin},
{'cat': "U18 Feminin", 'teamList': U18Feminin}, {'cat': "U15 Masculin", 'teamList': U15Masculin}, {'cat': "U15 Feminin", 'teamList': U15Feminin}, {'cat': "U13 Masculin", 'teamList': U13Masculin},
{'cat': "U13 Feminin", 'teamList': U13Feminin}, {'cat': "U11 Feminin", 'teamList': U11Feminin}]



export const teamListDD = [
    { label: 'SM1', value: 'SM1' },
    { label: 'SM2', value: 'SM2' },
    { label: 'SM3', value: 'SM3' },
    { label: 'SF1', value: 'SF1' },
    { label: 'SF2', value: 'SF2' },
    { label: 'SF3', value: 'SF3' },
    { label: 'FU18', value: 'FU18' },
    { label: 'MU17', value: 'MU17' },
    { label: 'MU17_2', value: 'MU17_2' },
    { label: 'MU15', value: 'MU15' },
    { label: 'MU15_2', value: 'MU15_2' },
    { label: 'MU15_3', value: 'MU15_3' },
    { label: 'FU15', value: 'FU15' },
    { label: 'FU15_2', value: 'FU15_2' },
    { label: 'MU13', value: 'MU13' },
    { label: 'MU13_2', value: 'MU13_2' },
    { label: 'FU13', value: 'FU13' },
    { label: 'FU11', value: 'FU11' },
  ];
