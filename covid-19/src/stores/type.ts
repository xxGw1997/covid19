export interface ShowAddSwitch {
    localinfeciton: boolean;
    all: boolean;
    confirm: boolean;
    dead: boolean;
    heal: boolean;
    importedCase: boolean;
    noInfect: boolean;
    suspect: boolean;
    nowConfirm: boolean;
    nowSevere: boolean;
    localConfirm: boolean;
}

export interface Today {
    confirm: number;
    isUpdated: boolean;
}

export interface Total {
    heal: number;
    showHeal: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
    confirm: number;
    dead: number;
    showRate: boolean;
}

export interface Today2 {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
    tip: string;
    wzz_add: number;
}

export interface Total2 {
    showRate: boolean;
    heal: number;
    showHeal: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
    confirm: number;
    dead: number;
}

export interface Today3 {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
}

export interface Total3 {
    wzz: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
    confirm: number;
    dead: number;
    showRate: boolean;
    heal: number;
    showHeal: boolean;
    grade: string;
}

export interface Child2 {
    name: string;
    today: Today3;
    total: Total3;
}

export interface Child {
    name: string;
    today: Today2;
    total: Total2;
    children: Child2[];
}

export interface AreaTree {
    today: Today;
    total: Total;
    children: Child[];
    name: string;
}

export interface ChinaTotal {
    nowConfirm: number;
    suspect: number;
    noInfect: number;
    showlocalinfeciton: number;
    localConfirm: number;
    noInfectH5: number;
    localConfirmH5: number;
    local_acc_confirm: number;
    heal: number;
    nowSevere: number;
    importedCase: number;
    confirm: number;
    dead: number;
    showLocalConfirm: number;
}

export interface ChinaAdd {
    dead: number;
    localConfirm: number;
    noInfectH5: number;
    confirm: number;
    nowConfirm: number;
    suspect: number;
    nowSevere: number;
    importedCase: number;
    noInfect: number;
    localConfirmH5: number;
    heal: number;
}

export interface Diseaseh5Shelf {
    isShowAdd: boolean;
    showAddSwitch: ShowAddSwitch;
    areaTree: AreaTree[];
    lastUpdateTime: string;
    chinaTotal: ChinaTotal;
    chinaAdd: ChinaAdd;
}

export interface StatisGradeCityDetail {
    city: string;
    confirmAdd: number;
    dead: number;
    grade: string;
    date: string;
    sdate: string;
    syear: number;
    province: string;
    nowConfirm: number;
    confirm: number;
    heal: number;
}

export interface RootObject {
    diseaseh5Shelf: Diseaseh5Shelf;
    statisGradeCityDetail: StatisGradeCityDetail[];
}

