export interface IProduct {
    baseSubjects: {
        id: string
        string: string
        __v: number
        _id: string
    },
    category: {
        copyToKk: boolean
        createdAt: string
        description: string
        id: string
        labelCases: {
            id: string
            plural: string
            singular: string
            __v: number
            _id: string
        }
        locale: string
        localizations: {
            id: {
                data: number[]
                type: string
                _id: string
            }
            _id: string,
        }[]
        published_at: string
        slug: string
        type: string
        updatedAt: string | null
        __v: number
        _id: string
    },
    createdAt: string
    diplomas: []
    duration: null | {
        id: string
        minStudyMonths: string
        __v: number
        _id: string
    }
    goal: string
    icon: string
    id: string
    journal_articles: Array<never> | {
        articleBody: {
            id: string
            paragraphBody: {
                id: string
                isHighlighted: boolean
                isLarger: boolean
                text: string
                title: string
                __v: number
                _id: string
            }[]
            __component: string
            __v: number
            _id: string
        }[]
        createdAt: string
        id: string
        journalAuthors: never[] | any
        journal_authors: string[]
        journal_category: string
        journal_tags: string[]
        pdfMaterials: {
            alternativeText: string
            caption: string
            createdAt: string
            ext: string
            hash: string
            height: null | number
            id: string
            mime: string
            name: string
            provider: string
            provider_metadata: {
                public_id: string
                resource_type: string
            }
            related: string[]
            size: number
            updatedAt: string
            url: string
            width: null | number
            __v: number
            _id: string
        }[]
        picture: {
            alternativeText: string
            caption: string
            createdAt: string
            ext: string
            formats: {
                ext: string
                hash: string
                height: number
                mime: string
                name: string
                path: null | string
                provider_metadata: {
                    public_id: string
                    resource_type: string
                }
                size: number
                url: string
                width: number
            }[]
            hash: string
            height: number
            id: string
            mime: string
            name: string
            provider: string
            provider_metadata: {
                public_id: string
                resource_type: string
            }
            related: string[]
            size: number
            updatedAt: string
            url: string
            width: number
            __v: number
            _id: string
        }
        programs: string[]
        published_at: string
        shortDescription: string
        slug: string
        title: string
        updatedAt: string
        __v: number
        _id: string
    }[]
    locale: string
    localizations: Array<never> | string[]
    picture: {
        alternativeText: string
        caption: string
        createdAt: string
        ext: string
        formats: {
            ext: string
            hash: string
            height: number
            mime: string
            name: string
            path: null
            provider_metadata: {
                public_id: string
                resource_type: string
            }
            size: number
            url: string
            width: number
        }[]
        hash: string
        height: number
        id: string
        mime: string
        name: string
        provider: string
        provider_metadata: {
            public_id: string
            resource_type: string
        }
        related: string[]
        size: number
        updatedAt: string
        url: string
        width: number
        __v: number
        _id: string
    }
    programModulesCounters: {
        leftCounter: string
        rightCounter: string
        _id: string
        __v: number
        id: string
    }
    published_at: string
    questions: Array<never> | any[]
    reviews: Array<never> | any[]
    slug: string
    specializedSubjects: ISpecializedSubjects[]
    specializedSubjectsAddons: null | {
        Practice: boolean
        id: string
        __v: number
        _id: string
    }
    studyFormat: string
    subjectsStickerType: string
    teachers: {
        copyToKk: boolean
        createdAt: string
        description: string
        descriptionItems: {
            id: string
            item: string
            __v: number
            _id: string
        }[]
        locale: string
        localizations: {
            data: number[]
            type: string
            _id: string
        }[]
        portrait: {
            alternativeText: string
            caption: string
            createdAt: string
            ext: string
            formats: {
                ext: string
                hash: string
                height: number
                mime: string
                name: string
                path: null | string
                provider_metadata: {
                    public_id: string
                    resource_type: string
                }
                size: number
                url: string
                width: number
            }
            hash: string
            height: number
            id: string
            mime: string
            name: string
            provider: string
            provider_metadata: {
                public_id: string
                resource_type: string
            }
            related: string[]
            size: number
            updatedAt: string
            url: string
            width: number
            __v: number
            _id: string
        }
        programs: string[]
        published_at: string
        slug: string
        updatedAt: string
        __v: number
        _id: string
    }
    title: string
    updatedAt: string
    whatWillYouLearn: ISpecializedSubjects[]
    whoIsFor: never[] | any[]
    __v: number
    _id: string
}


export interface ISpecializedSubjects {
    id: string
    string: string
    __v: number
    _id: string
}