import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import DataTable from '@/components/shared/DataTable'
import {
    HiArrowDown
} from 'react-icons/hi'
import SearchIcon from '@/components/ui/SearchIcon'
import { EditPencilSvg, DeleteActionSvg } from '@/assets/svg'
import type { ColumnDef } from '@tanstack/react-table'
import DownloadIcon from '@/components/ui/DownloadIcon'

interface UnderpricePropertyData {
    id: string
    address: string
    bed: string
    bath: string
    city: string
    state: string
    price: string
    chatgptPriceAnalysis: string
}

const UnderpriceProperty = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    // Mock data for underprice properties based on the image
    const underpriceData: UnderpricePropertyData[] = [
        {
            id: '1',
            address: 'Christine Brooks',
            bed: '04',
            bath: '04',
            city: 'City',
            state: 'State',
            price: '$325.00',
            chatgptPriceAnalysis: 'With four bedrooms, two baths, and 1,795 sqft of thoughtfully designed living space, this property offers excellent value for families seeking comfort and functionality.'
        },
        {
            id: '2',
            address: 'Rosie Pearson',
            bed: '04',
            bath: '04',
            city: 'City',
            state: 'State',
            price: '$325.00',
            chatgptPriceAnalysis: 'With four bedrooms, two baths, and 1,795 sqft of thoughtfully designed living space, this property offers excellent value for families seeking comfort and functionality.'
        },
        {
            id: '3',
            address: 'Darrell Caldwell',
            bed: '04',
            bath: '04',
            city: 'City',
            state: 'State',
            price: '$325.00',
            chatgptPriceAnalysis: 'With four bedrooms, two baths, and 1,795 sqft of thoughtfully designed living space, this property offers excellent value for families seeking comfort and functionality.'
        },
        {
            id: '4',
            address: 'Gilbert Johnston',
            bed: '04',
            bath: '04',
            city: 'City',
            state: 'State',
            price: '$325.00',
            chatgptPriceAnalysis: 'With four bedrooms, two baths, and 1,795 sqft of thoughtfully designed living space, this property offers excellent value for families seeking comfort and functionality.'
        },
        {
            id: '5',
            address: 'Alan Cain',
            bed: '04',
            bath: '04',
            city: 'City',
            state: 'State',
            price: '$325.00',
            chatgptPriceAnalysis: 'With four bedrooms, two baths, and 1,795 sqft of thoughtfully designed living space, this property offers excellent value for families seeking comfort and functionality.'
        },
        {
            id: '6',
            address: 'Alfred Murray',
            bed: '04',
            bath: '04',
            city: 'City',
            state: 'State',
            price: '$325.00',
            chatgptPriceAnalysis: 'With four bedrooms, two baths, and 1,795 sqft of thoughtfully designed living space, this property offers excellent value for families seeking comfort and functionality.'
        }
    ]

    const filteredData = underpriceData.filter(property =>
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.state.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Table columns definition
    const columns: ColumnDef<UnderpricePropertyData>[] = [
        {
            header: 'Address',
            accessorKey: 'address',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.address}</span>
                    </div>
                )
            }
        },
        {
            header: 'Bed',
            accessorKey: 'bed',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.bed}</span>
            }
        },
        {
            header: 'Bath',
            accessorKey: 'bath',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.bath}</span>
            }
        },
        {
            header: 'City',
            accessorKey: 'city',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.city}</span>
            }
        },
        {
            header: 'State',
            accessorKey: 'state',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.state}</span>
            }
        },
        {
            header: 'Price',
            accessorKey: 'price',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.price}</span>
            }
        },
        {
            header: 'ChatGPT Price Analysis',
            accessorKey: 'chatgptPriceAnalysis',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="max-w-xs">
                        <span className="text-sm text-gray-600 line-clamp-2">
                            {row.chatgptPriceAnalysis}
                        </span>
                    </div>
                )
            }
        },
        {
            header: 'Action',
            accessorKey: 'actions',
            meta: { headerAlign: 'center' },
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center justify-center">
                        <div className="flex bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                            <button className="p-[9px_8px_9px_12px] hover:bg-white border-r border-gray-200 transition-colors duration-200">
                                <EditPencilSvg />
                            </button>
                            <button className="p-[9px_8px_9px_12px] hover:bg-white transition-colors duration-200">
                                <DeleteActionSvg />
                            </button>
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="min-h-screen w-full">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
                <h1 className="text-[#202224] font-nunito text-[24px] font-bold leading-none tracking-[-0.114px]">Underprice Property</h1>

                {/* Search and Actions Container */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:items-center">
                    {/* Search + Upload File */}

                    <div className="relative bg-white rounded-[35px] w-full sm:w-auto">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            type="text"
                            placeholder="Search Users"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full sm:w-[253px] text-[#202224] font-normal text-[14px] leading-none font-nunito rounded-[19px] border border-[#D5D5D5] bg-white"
                        />
                    </div>


                    {/* Manage + Download always on same line */}
                    <div className="flex flex-row gap-2 w-full sm:w-auto justify-end">
                        <Button
                            variant="solid"
                            size="sm"
                            className="flex items-center justify-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF] w-full sm:w-auto"
                            onClick={() => navigate('/underprice-property/manage')}
                        >
                            Manage
                        </Button>
                        <Button
                            variant="solid"
                            size="sm"
                            className="flex items-center justify-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF] w-full sm:w-auto"
                        >
                            Upload File
                        </Button>
                        <Button
                            variant="solid"
                            size="sm"
                            className="flex items-center justify-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF] w-full sm:w-auto"
                        >
                            Download
                            <DownloadIcon className="ml-2" size={16} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* DataTable */}
            <div className="">
                <DataTable
                    columns={columns}
                    data={filteredData}
                    loading={false}
                    pageSizes={[10, 25, 50]}
                    pagingData={{
                        total: filteredData.length,
                        pageIndex: 1,
                        pageSize: 10,
                    }}
                />
            </div>
        </div>
    )
}

export default UnderpriceProperty 