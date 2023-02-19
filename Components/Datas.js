// Data used in team screen

// export const teamList = ['SM1','SM2','SM3','SF1','SF2','SF3','MU17_phase1','MU17_phase2','MU17_2_phase1','MU17_2_phase2','FU18_phase1','FU18_phase2','MU15_phase1',
// 'MU15_phase2','MU15_2_phase1','MU15_2_phase2','MU15_3_phase1','FU15_phase1','FU15_phase2','FU15_2_phase1','FU15_2_phase2','MU13_phase1','MU13_phase2',
// 'MU13_2_phase1','MU13_2_phase2','FU13_phase1','FU13_phase2','FU11_phase1','FU11_phase2']

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

