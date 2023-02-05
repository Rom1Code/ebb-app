import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import  { getData } from './GetData'

const data =""
const test = async () => {console.log( await getData('feuille_match_SM1'))}
console.log(test())

//classement
export const SM1_classement = require('../Helper/classement_SM1.json');
export const SM2_classement = require('../Helper/classement_SM2.json');
export const SM3_classement = require('../Helper/classement_SM3.json');
export const SF1_classement = require('../Helper/classement_SF1.json');
export const SF2_classement = require('../Helper/classement_SF2.json');
export const SF3_classement = require('../Helper/classement_SF3.json');
export const MU17_phase1_classement = require('../Helper/classement_MU17_phase1.json');
export const MU17_phase2_classement = require('../Helper/classement_MU17_phase2.json');
export const MU17_2_phase1_classement = require('../Helper/classement_MU17_2_phase1.json');
export const MU17_2_phase2_classement = require('../Helper/classement_MU17_2_phase2.json');
export const FU18_phase1_classement = require('../Helper/classement_FU18_phase1.json');
export const FU18_phase2_classement = require('../Helper/classement_FU18_phase2.json');
export const MU15_phase1_classement = require('../Helper/classement_MU15_phase1.json');
export const MU15_phase2_classement = require('../Helper/classement_MU15_phase2.json');
export const MU15_2_phase1_classement = require('../Helper/classement_MU15_2_phase1.json');
export const MU15_2_phase2_classement = require('../Helper/classement_MU15_2_phase2.json');
export const MU15_3_phase1_classement = require('../Helper/classement_MU15_3_phase1.json');
export const FU15_phase1_classement = require('../Helper/classement_FU15_phase1.json');
export const FU15_phase2_classement = require('../Helper/classement_FU15_phase2.json');
export const FU15_2_phase1_classement = require('../Helper/classement_FU15_2_phase1.json');
export const FU15_2_phase2_classement = require('../Helper/classement_FU15_2_phase2.json');
export const MU13_phase1_classement = require('../Helper/classement_MU13_phase1.json');
export const MU13_phase2_classement= require('../Helper/classement_MU13_phase2.json');
export const MU13_2_phase1_classement = require('../Helper/classement_MU13_2_phase1.json');
export const MU13_2_phase2_classement = require('../Helper/classement_MU13_2_phase2.json');
export const FU13_phase1_classement = require('../Helper/classement_FU13_phase1.json');
export const FU13_phase2_classement = require('../Helper/classement_FU13_phase2.json');
export const FU11_phase1_classement = require('../Helper/classement_FU11_phase1.json');
export const FU11_phase2_classement = require('../Helper/classement_FU11_phase2.json');

export const classsementList = [SM1_classement, SM2_classement, SM3_classement, SF1_classement, SF2_classement, SF3_classement, MU17_phase1_classement, MU17_phase2_classement, 
MU17_2_phase1_classement, MU17_2_phase2_classement, FU18_phase1_classement, FU18_phase2_classement, MU15_phase1_classement, MU15_phase2_classement, 
MU15_2_phase1_classement, MU15_2_phase2_classement, MU15_3_phase1_classement , FU15_phase1_classement, FU15_phase2_classement, FU15_2_phase1_classement, 
FU15_2_phase2_classement, MU13_phase1_classement, MU13_phase2_classement, MU13_2_phase1_classement, MU13_2_phase2_classement, FU13_phase1_classement, 
FU13_phase2_classement, FU11_phase1_classement, FU11_phase2_classement]

//calendrier
export const SM1_calendrier = require('../Helper/calendrier_SM1.json');
export const SM2_calendrier = require('../Helper/calendrier_SM2.json');
export const SM3_calendrier = require('../Helper/calendrier_SM3.json');
export const SF1_calendrier = require('../Helper/calendrier_SF1.json');
export const SF2_calendrier = require('../Helper/calendrier_SF2.json');
export const SF3_calendrier = require('../Helper/calendrier_SF3.json');
export const MU17_phase1_calendrier = require('../Helper/calendrier_MU17_phase1.json');
export const MU17_phase2_calendrier = require('../Helper/calendrier_MU17_phase2.json');
export const MU17_2_phase1_calendrier = require('../Helper/calendrier_MU17_2_phase1.json');
export const MU17_2_phase2_calendrier = require('../Helper/calendrier_MU17_2_phase2.json');
export const FU18_phase1_calendrier = require('../Helper/calendrier_FU18_phase1.json');
export const FU18_phase2_calendrier = require('../Helper/calendrier_FU18_phase2.json');
export const MU15_phase1_calendrier = require('../Helper/calendrier_MU15_phase1.json');
export const MU15_phase2_calendrier = require('../Helper/calendrier_MU15_phase2.json');
export const MU15_2_phase1_calendrier = require('../Helper/calendrier_MU15_2_phase1.json');
export const MU15_2_phase2_calendrier = require('../Helper/calendrier_MU15_2_phase2.json');
export const MU15_3_phase1_calendrier = require('../Helper/calendrier_MU15_3_phase1.json');
export const FU15_phase1_calendrier = require('../Helper/calendrier_FU15_phase1.json');
export const FU15_phase2_calendrier = require('../Helper/calendrier_FU15_phase2.json');
export const FU15_2_phase1_calendrier = require('../Helper/calendrier_FU15_2_phase1.json');
export const FU15_2_phase2_calendrier = require('../Helper/calendrier_FU15_2_phase2.json');
export const MU13_phase1_calendrier = require('../Helper/calendrier_MU13_phase1.json');
export const MU13_phase2_calendrier = require('../Helper/calendrier_MU13_phase2.json');
export const MU13_2_phase1_calendrier = require('../Helper/calendrier_MU13_2_phase1.json');
export const MU13_2_phase2_calendrier = require('../Helper/calendrier_MU13_2_phase2.json');
export const FU13_phase1_calendrier = require('../Helper/calendrier_FU13_phase1.json');
export const FU13_phase2_calendrier = require('../Helper/calendrier_FU13_phase2.json');
export const FU11_phase1_calendrier = require('../Helper/calendrier_FU11_phase1.json');
export const FU11_phase2_calendrier = require('../Helper/calendrier_FU11_phase1.json');

export const calendarList = [SM1_calendrier, SM2_calendrier, SM3_calendrier, SF1_calendrier, SF2_calendrier, SF3_calendrier, MU17_phase1_calendrier, MU17_phase2_calendrier, 
MU17_2_phase1_calendrier, MU17_2_phase2_calendrier, FU18_phase1_calendrier, FU18_phase2_calendrier, MU15_phase1_calendrier, MU15_phase2_calendrier, 
MU15_2_phase1_calendrier, MU15_2_phase2_calendrier, MU15_3_phase1_calendrier , FU15_phase1_calendrier, FU15_phase2_calendrier, FU15_2_phase1_calendrier, 
FU15_2_phase2_calendrier, MU13_phase1_calendrier, MU13_phase2_calendrier, MU13_2_phase1_calendrier, MU13_2_phase2_calendrier, FU13_phase1_calendrier, 
FU13_phase2_calendrier, FU11_phase1_calendrier, FU11_phase2_calendrier]




export const feuilleMatchSM1 = require('../Helper/feuille_match_SM1.json')
export const feuilleMatchSM2 = require('../Helper/feuille_match_SM2.json');
export const feuilleMatchSM3 = require('../Helper/feuille_match_SM3.json');
export const feuilleMatchSF1 = require('../Helper/feuille_match_SF1.json');
export const feuilleMatchSF2 = require('../Helper/feuille_match_SF2.json');
export const feuilleMatchSF3 = require('../Helper/feuille_match_SF3.json');
export const feuilleMatchMU17_phase1 = require('../Helper/feuille_match_MU17_phase1.json');
export const feuilleMatchMU17_phase2 = require('../Helper/feuille_match_MU17_phase2.json');
export const feuilleMatchMU17_2_phase1 = require('../Helper/feuille_match_MU17_2_phase1.json');
export const feuilleMatchMU17_2_phase2 = require('../Helper/feuille_match_MU17_2_phase2.json');
export const feuilleMatchFU18_phase1 = require('../Helper/feuille_match_FU18_phase1.json');
export const feuilleMatchFU18_phase2 = require('../Helper/feuille_match_FU18_phase2.json');
export const feuilleMatchMU15_phase1 = require('../Helper/feuille_match_MU15_phase1.json');
export const feuilleMatchMU15_phase2 = require('../Helper/feuille_match_MU15_phase2.json');
export const feuilleMatchMU15_2_phase1 = require('../Helper/feuille_match_MU15_2_phase1.json');
export const feuilleMatchMU15_2_phase2 = require('../Helper/feuille_match_MU15_2_phase2.json');
export const feuilleMatchMU15_3_phase1 = require('../Helper/feuille_match_MU15_3_phase1.json');
export const feuilleMatchFU15_phase1 = require('../Helper/feuille_match_FU15_phase1.json');
export const feuilleMatchFU15_phase2 = require('../Helper/feuille_match_FU15_phase2.json');
export const feuilleMatchFU15_2_phase1 = require('../Helper/feuille_match_FU15_2_phase1.json');
export const feuilleMatchFU15_2_phase2 = require('../Helper/feuille_match_FU15_2_phase2.json');
export const feuilleMatchMU13_phase1 = require('../Helper/feuille_match_MU13_phase1.json');
export const feuilleMatchMU13_phase2 = require('../Helper/feuille_match_MU13_phase2.json');
export const feuilleMatchMU13_2_phase1 = require('../Helper/feuille_match_MU13_2_phase1.json');
export const feuilleMatchMU13_2_phase2 = require('../Helper/feuille_match_MU13_2_phase2.json');
export const feuilleMatchFU13_phase1 = require('../Helper/feuille_match_FU13_phase1.json');
export const feuilleMatchFU13_phase2 = require('../Helper/feuille_match_FU13_phase2.json');
export const feuilleMatchFU11_phase1 = require('../Helper/feuille_match_FU11_phase1.json');
export const feuilleMatchFU11_phase2 = require('../Helper/feuille_match_FU11_phase2.json');

export const feuilleMatchList = [feuilleMatchSM1,feuilleMatchSM2,feuilleMatchSM3,feuilleMatchSF1,feuilleMatchSF2,feuilleMatchSF3,feuilleMatchMU17_phase1,feuilleMatchMU17_phase2,feuilleMatchMU17_2_phase1,feuilleMatchMU17_2_phase2,feuilleMatchFU18_phase1,feuilleMatchFU18_phase2,feuilleMatchMU15_phase1,
    feuilleMatchMU15_phase2,feuilleMatchMU15_2_phase1,feuilleMatchMU15_2_phase2,feuilleMatchMU15_3_phase1,feuilleMatchFU15_phase1,feuilleMatchFU15_phase2,feuilleMatchFU15_2_phase1,feuilleMatchFU15_2_phase2,feuilleMatchMU13_phase1,feuilleMatchMU13_phase2,
    feuilleMatchMU13_2_phase1,feuilleMatchMU13_2_phase2,feuilleMatchFU13_phase1,feuilleMatchFU13_phase2,feuilleMatchFU11_phase1,feuilleMatchFU11_phase2]



export const teamList = ['SM1','SM2','SM3','SF1','SF2','SF3','MU17_phase1','MU17_phase2','MU17_2_phase1','MU17_2_phase2','FU18_phase1','FU18_phase2','MU15_phase1',
'MU15_phase2','MU15_2_phase1','MU15_2_phase2','MU15_3_phase1','FU15_phase1','FU15_phase2','FU15_2_phase1','FU15_2_phase2','MU13_phase1','MU13_phase2',
'MU13_2_phase1','MU13_2_phase2','FU13_phase1','FU13_phase2','FU11_phase1','FU11_phase2']

export const seniorMasculin = [{'team': 'SM1', 'label': 'SM1','level' : 'Pré réginale', 'group':'(Poule A)'},{'team': 'SM2', 'label': 'SM2', 'level': 'Division 3','group':'(Poule B)'},{'team': 'SM3', 'label': 'SM3', 'level': 'Division 5','group':'(Poule C)'}]
export const seniorFeminin = [{'team': 'SF1', 'label': 'SF1', 'level' : 'Pré nationale', 'group':'(Poule B)'},{'team': 'SF2', 'label': 'SF2', 'level': 'Pré réginale','group':'(Poule A)'},{'team': 'SF3', 'label': 'SF3', 'level': 'Division 3','group':'(Poule D)'}]
export const U17Masculin = [{'team':'MU17_phase1', 'label': 'U17', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule B)'},{'team':'MU17_phase2', 'label': 'U17', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule B)'},
{'team':'MU17_2_phase1', 'label': 'U17-2', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule D)'},{'team':'MU17_2_phase2', 'label': 'U17-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule B)'}]
export const U18Feminin = [{'team':'FU18_phase1', 'label': 'U18', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule B)'},{'team':'FU18_phase2', 'label': 'U18', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule A)'}]
export const U15Masculin = [{'team':'MU15_phase1', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule C)'},{'team':'MU15_phase2', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule B)'},
{'team':'MU15_2_phase1', 'label': 'U15-2', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule B)'},{'team':'MU15_2_phase2', 'label': 'U15-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule C)'},{'team':'MU15_3_phase2', 'label': 'U15-3', 'level': 'Divison 3' ,'group': 'Phase 2 (Poule C)'}]
export const U15Feminin = [{'team':'FU15_phase1', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule A)'}, {'team':'FU15_phase2', 'label': 'U15', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule A)'}, {'team':'FU15_2_phase2', 'label': 'U15-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule D)'}]
export const U13Masculin = [{'team':'MU13_phase1', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule C)'},{'team':'MU13_phase2', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule B)'},
{'team':'MU13_2_phase1', 'label': 'U13-2', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule F)'},{'team':'MU13_2_phase2', 'label': 'U13-2', 'level': 'Divison 2' ,'group': 'Phase 2 (Poule C)'}]
export const U13Feminin = [{'team':'FU13_phase1', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 1 (Poule A)'},{'team':'FU13_phase2', 'label': 'U13', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule A)'}]
export const U11Feminin = [{'team':'FU11_phase1', 'label': 'U11', 'level': 'Divison 2' ,'group': 'Phase 1 (Poule A)'},{'team':'FU11_phase2', 'label': 'U11', 'level': 'Divison 1' ,'group': 'Phase 2 (Poule A)'}]

export const teamCat = [{'cat': 'Senior Masculin', 'teamList': seniorMasculin}, {'cat': 'Senior Feminine', 'teamList': seniorFeminin}, {'cat': 'U17 Masculin', 'teamList': U17Masculin},
{'cat': "U18 Feminin", 'teamList': U18Feminin}, {'cat': "U15 Masculin", 'teamList': U15Masculin}, {'cat': "U15 Feminin", 'teamList': U15Feminin}, {'cat': "U13 Masculin", 'teamList': U13Masculin},
{'cat': "U13 Feminin", 'teamList': U13Feminin}, {'cat': "U11 Feminin", 'teamList': U11Feminin}]

