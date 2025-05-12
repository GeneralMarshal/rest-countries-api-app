interface CountriesData {
    name: string
    topLevelDomain: string[]
    alpha2Code: string
    capital: string
    altSpellings: string[]
    subregion: string
    region: string
    population: number
    latlng:number[]
    demonym: String
    area: number
    timezones: string[]
    borders: string[]
    nativeName: string
    numericCode: string
    flags: Flags
    currencies: Currencies[]
    languages: Languages[]
    translations: Translations
    flag: string
    regionalBlocs: RegionalBlocs[]
}

type AllCountriesState = CountriesData[] | []

interface FilterProps {
    toggleFilters: boolean
    setToggleFilters: React.Dispatch<React.SetStateAction<boolean>>
    filterArray: FilterArray
    setFilterArray: React.Dispatch<React.SetStateAction<Filters[]>>
}

type Flags = {
    svg: string
    png: string
}

type Currencies = {
    code: string
    name: string
    symbol: string
}

type Languages = {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}

type Translations = {
    br: string
    pt: string
    nl: string
    hr: string
    fa: string
    de: string
    es: string
    fr: string
    ja: string
    it: string
    hu: string
}

type RegionalBlocs = {
    acronym: string
    name: string
}

type Filters = "africa" | "america" | "asia" | "europe" | "oceania"

type FilterArray = Filters[]