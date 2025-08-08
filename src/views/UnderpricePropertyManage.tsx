import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SearchIcon from '@/components/ui/SearchIcon'
import DownloadIcon from '@/components/ui/DownloadIcon'
import { AngleSmallLeftSvg, AngleSmallRightSvg } from '@/assets/svg'

interface PropertyItem {
    id: string
    name: string
    selected: boolean
}

const UnderpricePropertyManage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [leftPanelItems, setLeftPanelItems] = useState<PropertyItem[]>([
        { id: '1', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: false },
        { id: '2', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: false },
        { id: '3', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: true },
        { id: '4', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: false },
        { id: '5', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: false },
        { id: '6', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: false },
        { id: '7', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: false },
    ])
    const [rightPanelItems, setRightPanelItems] = useState<PropertyItem[]>([
        { id: '8', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: false },
        { id: '9', name: 'NPL Building 2311 King Streeet, MalibuJL, Jersey city 145738 App 75 Ring Road', selected: true },
    ])

    const handleSelectAll = (panel: 'left' | 'right') => {
        if (panel === 'left') {
            const allSelected = leftPanelItems.every(item => item.selected)
            setLeftPanelItems(items => items.map(item => ({ ...item, selected: !allSelected })))
        } else {
            const allSelected = rightPanelItems.every(item => item.selected)
            setRightPanelItems(items => items.map(item => ({ ...item, selected: !allSelected })))
        }
    }

    const handleClearAll = (panel: 'left' | 'right') => {
        if (panel === 'left') {
            setLeftPanelItems(items => items.map(item => ({ ...item, selected: false })))
        } else {
            setRightPanelItems(items => items.map(item => ({ ...item, selected: false })))
        }
    }

    const handleItemSelect = (panel: 'left' | 'right', itemId: string) => {
        if (panel === 'left') {
            setLeftPanelItems(items => 
                items.map(item => 
                    item.id === itemId ? { ...item, selected: !item.selected } : item
                )
            )
        } else {
            setRightPanelItems(items => 
                items.map(item => 
                    item.id === itemId ? { ...item, selected: !item.selected } : item
                )
            )
        }
    }

    const handleAdd = () => {
        const selectedItems = leftPanelItems.filter(item => item.selected)
        const unselectedItems = leftPanelItems.filter(item => !item.selected)
        
        setLeftPanelItems(unselectedItems)
        setRightPanelItems(prev => [...prev, ...selectedItems])
    }

    const handleRemove = () => {
        const selectedItems = rightPanelItems.filter(item => item.selected)
        const unselectedItems = rightPanelItems.filter(item => !item.selected)
        
        setRightPanelItems(unselectedItems)
        setLeftPanelItems(prev => [...prev, ...selectedItems])
    }

    const filteredLeftItems = leftPanelItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const filteredRightItems = rightPanelItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen w-full">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
                <h1 className="text-[#202224] font-nunito text-[24px] font-bold leading-none tracking-[-0.114px]">
                    Underprice Property
                </h1>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:items-center">
                    <div className="relative bg-white rounded-[35px] w-full sm:w-auto">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            type="text"
                            placeholder="Search Users"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full sm:w-[253px] text-[#202224] font-normal text-[14px] leading-none font-nunit  rounded-[19px] border border-[#D5D5D5] bg-white"
                        />
                    </div>
                    <div className="flex flex-row gap-2 w-full sm:w-auto justify-end">
                    <Button variant="solid" size="sm" className="flex items-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF]">
                        Upload File
                    </Button>
                    <Button variant="solid" size="sm" className="flex items-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF]">
                        Download
                        <DownloadIcon className="ml-2" size={16} />
                    </Button>
                    </div>
                </div>
            </div>

            {/* Dual Panel Selection Interface */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Panel */}
                <div className="flex-1">
                    <div className="bg-white rounded-[14px] h-[610px]">
                        <div className="rounded-t-[14px] border border-[#D5D5D5]/60 bg-[#F3F6FE] flex items-center justify-between mb-4 p-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="rounded-[4px] border border-[#D9D9D9] bg-white"
                                    style={{ width: '14px', height: '14px' }}
                                    checked={leftPanelItems.length > 0 && leftPanelItems.every(item => item.selected)}
                                    onChange={() => handleSelectAll('left')}
                                />
                                <span className="text-[#202224] font-nunito text-[14px] not-italic font-extrabold leading-none opacity-90 !ml-[16px]">Select All</span>
                            </div>
                            <button 
                                onClick={() => handleClearAll('left')}
                                className="text-[#4880FF] font-nunito text-[14px] not-italic font-extrabold leading-none opacity-90 "
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="space-y-2 max-h-[32rem] overflow-y-auto">
                            {filteredLeftItems.map((item) => (
                                <div key={item.id} className="flex items-start space-x-3 px-[14px] py-[16px] rounded-lg hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        className="rounded-[4px] border border-[#D9D9D9] bg-white"
                                        style={{ width: '14px', height: '14px' }}
                                        checked={item.selected}
                                        onChange={() => handleItemSelect('left', item.id)}
                                    />
                                    <span className="text-[#202224] font-nunito text-[14px] not-italic font-semibold leading-none opacity-90">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row md:flex-col justify-center space-y-0 md:space-y-4 space-x-4 md:space-x-0">
                    <Button
                        variant="solid"
                        size="sm"
                        className="flex items-center justify-between text-white text-center font-nunito !text-[13px] font-bold px-4 py-3 !rounded-[19px] !bg-[#4880FF]"
                        onClick={handleAdd}
                    >
                        Add
                        <AngleSmallLeftSvg className="ml-[20px] transform -rotate-90 md:rotate-0" size={16} />
                    </Button>
                    <Button
                        variant="solid"
                        size="sm"
                        className="flex items-center justify-between text-white text-center font-nunito !text-[13px] font-bold px-4 py-3 !rounded-[19px] !bg-[#4880FF]"
                        onClick={handleRemove}
                    >
                        <AngleSmallRightSvg className="mr-[10px] transform -rotate-90 md:rotate-0" size={16} />
                        Remove
                       
                    </Button>
                </div>

                {/* Right Panel */}
                <div className="flex-1">
                <div className="bg-white rounded-[14px] h-[610px]">
                        <div className="rounded-t-[14px] border border-[#D5D5D5]/60 bg-[#F3F6FE] flex items-center justify-between mb-4 px-[14px] py-[15px]">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="rounded-[4px] border border-[#D9D9D9] bg-white"
                                    style={{ width: '14px', height: '14px' }}
                                    checked={rightPanelItems.length > 0 && rightPanelItems.every(item => item.selected)}
                                    onChange={() => handleSelectAll('right')}
                                />
                                <span className="text-[#202224] font-nunito text-[14px] not-italic font-extrabold leading-none opacity-90 !ml-[16px]">Select All</span>
                            </div>
                            <button 
                                onClick={() => handleClearAll('right')}
                                className="text-[#4880FF] font-nunito text-[14px] not-italic font-extrabold leading-none opacity-90 "
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="space-y-2 max-h-[32rem] overflow-y-auto">
                            {filteredRightItems.map((item) => (
                                <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                                    <input
                                        type="checkbox"
                                        className="rounded-[4px] border border-[#D9D9D9] bg-white"
                                        style={{ width: '14px', height: '14px' }}
                                        checked={item.selected}
                                        onChange={() => handleItemSelect('right', item.id)}
                                    />
                                    <span className="text-[#202224] font-nunito text-[14px] not-italic font-semibold leading-none opacity-90">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderpricePropertyManage 