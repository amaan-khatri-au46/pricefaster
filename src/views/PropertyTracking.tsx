import React, { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Dialog from '@/components/ui/Dialog'
import DataTable from '@/components/shared/DataTable'
import {
    HiPlus,
    HiArrowDown,
    HiX
} from 'react-icons/hi'
import SearchIcon from '@/components/ui/SearchIcon'
import FilterIcon from '@/components/ui/FilterIcon'
import { EditPencilSvg, DeleteActionSvg, AngleCircleRightSvg } from '@/assets/svg'
import type { ColumnDef } from '@tanstack/react-table'
import DownloadIcon from '@/components/ui/DownloadIcon'

interface PropertyTrackingData {
    id: string
    propertyName: string
    userName: string
    address: string
    price: string
    location: string
    customerType: string
    firstTrackedProperty: string
    bed: string
    bath: string
}

const PropertyTracking = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [showFilterModal, setShowFilterModal] = useState(false)
    const [filterData, setFilterData] = useState({
        minPrice: '',
        maxPrice: '',
        location: '',
        customerType: '',
        firstTrackedProperty: '',
        beds: '',
        baths: ''
    })

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (showFilterModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [showFilterModal])

    // Custom dropdown indicator component
    const CustomDropdownIndicator = (props: any) => {
        const { selectProps, ...rest } = props || {};
        const isMenuOpen = selectProps && selectProps.menuIsOpen;
        return (
            <div className={`select-dropdown-indicator transition-transform duration-500 ${isMenuOpen ? 'rotate-360' : ''}`}>
                <AngleCircleRightSvg size={16} />
            </div>
        )
    }

    // Mock data for property tracking based on the image
    const propertyTrackingData: PropertyTrackingData[] = [
        {
            id: '1',
            propertyName: 'Christine Brooks',
            userName: 'Ady Rawnman',
            address: '089 Kutch Green Apt. 448',
            price: '$250.00',
            location: 'City, State',
            customerType: 'Homeowner',
            firstTrackedProperty: 'Single',
            bed: '04',
            bath: '04'
        },
        {
            id: '2',
            propertyName: 'Rosie Pearson',
            userName: 'Ady Rawnman',
            address: '979 Immanuel Ferry Suite 526',
            price: '$250.00',
            location: 'City, State',
            customerType: 'Investor',
            firstTrackedProperty: 'Family',
            bed: '04',
            bath: '04'
        },
        {
            id: '3',
            propertyName: 'Darrell Caldwell',
            userName: 'Ady Rawnman',
            address: '8587 Frida Ports',
            price: '$250.00',
            location: 'City, State',
            customerType: 'Homeowner',
            firstTrackedProperty: 'Condo',
            bed: '04',
            bath: '04'
        },
        {
            id: '4',
            propertyName: 'Gilbert Johnston',
            userName: 'Ady Rawnman',
            address: '768 Destiny Lake Suite 600',
            price: '$250.00',
            location: 'City, State',
            customerType: 'Investor',
            firstTrackedProperty: 'Duplex',
            bed: '04',
            bath: '04'
        },
        {
            id: '5',
            propertyName: 'Alan Cain',
            userName: 'Ady Rawnman',
            address: '042 Mylene Throughway',
            price: '$250.00',
            location: 'City, State',
            customerType: 'Homeowner',
            firstTrackedProperty: 'Single',
            bed: '04',
            bath: '04'
        },
        {
            id: '6',
            propertyName: 'Alfred Murray',
            userName: 'Ady Rawnman',
            address: '543 Weimann Mountain',
            price: '$250.00',
            location: 'City, State',
            customerType: 'Investor',
            firstTrackedProperty: 'Family',
            bed: '04',
            bath: '04'
        }
    ]

    const filteredData = propertyTrackingData.filter(property =>
        property.propertyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Table columns definition
    const columns: ColumnDef<PropertyTrackingData>[] = [
        {
            header: 'Property Name',
            accessorKey: 'propertyName',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return (
                    <div className="flex items-center">
                        <span className="">{row.propertyName}</span>
                    </div>
                )
            }
        },
        {
            header: 'User Name',
            accessorKey: 'userName',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.userName}</span>
            }
        },
        {
            header: 'Address',
            accessorKey: 'address',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.address}</span>
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
            header: 'Location',
            accessorKey: 'location',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.location}</span>
            }
        },
        {
            header: 'Customer Type',
            accessorKey: 'customerType',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.customerType}</span>
            }
        },
        {
            header: 'First Tracked Property',
            accessorKey: 'firstTrackedProperty',
            enableSorting: true,
            cell: (props) => {
                const row = props.row.original
                return <span className="">{row.firstTrackedProperty}</span>
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
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                <h1 className="text-[#202224] font-nunito text-[24px] font-bold leading-none tracking-[-0.114px]">Property Tracking</h1>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:items-center">
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
                    <div className='flex flex-row gap-2 w-full sm:w-auto justify-end'>
                        <Button
                            variant="solid"
                            size="sm"
                            className="!bg-[#4880FF] text-white !rounded-[19px] !p-[9px]"
                            onClick={() => setShowFilterModal(true)}
                        >
                            <FilterIcon className="w-5 h-5" size={20} />
                        </Button>
                        <Button variant="solid" size="sm" className="flex items-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF]">
                            Add Property
                        </Button>
                        <Button variant="solid" size="sm" className="flex items-center text-white text-center font-nunito text-[12px] font-bold px-[16px] py-[11px] !rounded-[19px] !bg-[#4880FF]">
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

            {/* Filter Modal */}
            <Dialog
                isOpen={showFilterModal}
                onRequestClose={() => setShowFilterModal(false)}
                width={500}
                closable={false}
                contentClassName="p-0 rounded-[24px] bg-white shadow-[0_10px_20px_0_rgba(18,38,63,0.03)] mx-[20px] my-[4rem]"
            >
                <div className="">
                    <div className="flex justify-between items-center  px-4 py-4 border-b border-[#EFF2F7] ">
                        <h2 className="text-[#495057] font-nunito text-[18px] font-medium leading-none">
                            Filter Your Data
                        </h2>
                        <button
                            className="absolute top-[0px] right-4 text-[30px] text-gray-400 hover:text-gray-600 transition-colors"
                            onClick={() => setShowFilterModal(false)}
                        >
                            <HiX className='mt-[13px]' size={22} />
                        </button>
                    </div>

                    <div className="space-y-6 px-4 py-4">
                        {/* Price Range */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#495057] font-nunito text-[16px] not-italic font-semibold leading-none mb-2">
                                    Minimum Price
                                </label>
                                <Input
                                    type="number"
                                    placeholder="$00"
                                    value={filterData.minPrice}
                                    onChange={(e) => setFilterData({ ...filterData, minPrice: e.target.value })}
                                    className="w-full rounded-[19px] border-[0.6px] border-[#D5D5D5] bg-white placeholder:text-[#202224] placeholder:font-nunito placeholder:text-[14px] placeholder:not-italic placeholder:font-normal placeholder:leading-none placeholder:opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-[#495057] font-nunito text-[16px] not-italic font-semibold leading-none mb-2">
                                    Maximum Price
                                </label>
                                <Input
                                    type="number"
                                    placeholder="$00"
                                    value={filterData.maxPrice}
                                    onChange={(e) => setFilterData({ ...filterData, maxPrice: e.target.value })}
                                    className="w-full rounded-[19px] border-[0.6px] border-[#D5D5D5] bg-white placeholder:text-[#202224] placeholder:font-nunito  placeholder:text-[14px] placeholder:not-italic placeholder:font-normal placeholder:leading-none placeholder:opacity-50"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <div className="flex items-center mb-2">
                                <label className="block text-[#495057] font-nunito text-[16px] not-italic font-semibold leading-none">
                                    Location
                                </label>
                            </div>
                            <Select
                                placeholder="Select Location"
                                options={[
                                    { value: 'new-york', label: 'New York' },
                                    { value: 'los-angeles', label: 'Los Angeles' },
                                    { value: 'chicago', label: 'Chicago' },
                                    { value: 'miami', label: 'Miami' }
                                ]}
                                value={filterData.location ? { value: filterData.location, label: filterData.location } : null}
                                onChange={(option) => setFilterData({ ...filterData, location: option?.value || '' })}
                                className="propertyslect w-full border-[#D5D5D5] bg-white [&_.select__placeholder]:text-[#202224] [&_.select__placeholder]:font-nunito [&_.select__placeholder]:text-[14px] [&_.select__placeholder]:not-italic [&_.select__placeholder]:font-normal [&_.select__placeholder]:leading-normal"
                                components={{
                                    DropdownIndicator: CustomDropdownIndicator
                                }}
                            />
                        </div>

                        {/* Customer Type */}
                        <div>
                            <div className="flex items-center mb-2">
                                <label className="block text-[#495057] font-nunito text-[16px] not-italic font-semibold leading-none">
                                    Customer Type
                                </label>
                            </div>
                            <Select
                                placeholder="Select Customer Type"
                                options={[
                                    { value: 'homeowner', label: 'Homeowner' },
                                    { value: 'investor', label: 'Investor' }
                                ]}
                                value={filterData.customerType ? { value: filterData.customerType, label: filterData.customerType } : null}
                                onChange={(option) => setFilterData({ ...filterData, customerType: option?.value || '' })}
                                className="propertyslect w-full border-[#D5D5D5] bg-white [&_.select__placeholder]:text-[#202224] [&_.select__placeholder]:font-nunito [&_.select__placeholder]:text-[14px] [&_.select__placeholder]:not-italic [&_.select__placeholder]:font-normal [&_.select__placeholder]:leading-normal"
                                components={{
                                    DropdownIndicator: CustomDropdownIndicator
                                }}
                            />
                        </div>

                        {/* First Tracked Property */}
                        <div>
                            <div className="flex items-center mb-2">
                                <label className="block text-[#495057] font-nunito text-[16px] not-italic font-semibold leading-none">
                                    First Tracked Property
                                </label>
                            </div>
                            <Select
                                placeholder="Select First Tracked Property"
                                options={[
                                    { value: 'single', label: 'Single' },
                                    { value: 'family', label: 'Family' },
                                    { value: 'condo', label: 'Condo' },
                                    { value: 'duplex', label: 'Duplex' }
                                ]}
                                value={filterData.firstTrackedProperty ? { value: filterData.firstTrackedProperty, label: filterData.firstTrackedProperty } : null}
                                onChange={(option) => setFilterData({ ...filterData, firstTrackedProperty: option?.value || '' })}
                                className="propertyslect w-full !border-[#D5D5D5] bg-white [&_.select__placeholder]:text-[#202224] [&_.select__placeholder]:font-nunito [&_.select__placeholder]:text-[14px] [&_.select__placeholder]:not-italic [&_.select__placeholder]:font-normal [&_.select__placeholder]:leading-normal"
                                components={{
                                    DropdownIndicator: CustomDropdownIndicator
                                }}
                            />
                        </div>

                        {/* Beds and Baths */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#495057] font-nunito text-[16px] not-italic font-semibold leading-none mb-2">
                                    Numbers of Beds
                                </label>
                                <Input
                                    type="number"
                                    placeholder="00"
                                    value={filterData.beds}
                                    onChange={(e) => setFilterData({ ...filterData, beds: e.target.value })}
                                    className="w-full rounded-[19px] border-[0.6px] border-[#D5D5D5] bg-white placeholder:text-[#202224] placeholder:font-nunito placeholder:text-[14px] placeholder:not-italic placeholder:font-normal placeholder:leading-none placeholder:opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-[#495057] font-nunito text-[16px] not-italic font-semibold leading-none mb-2">
                                    Numbers of Baths
                                </label>
                                <Input
                                    type="number"
                                    placeholder="00"
                                    value={filterData.baths}
                                    onChange={(e) => setFilterData({ ...filterData, baths: e.target.value })}
                                    className="w-full rounded-[19px] border-[0.6px] border-[#D5D5D5] bg-white placeholder:text-[#202224] placeholder:font-nunito  placeholder:text-[14px] placeholder:not-italic placeholder:font-normal placeholder:leading-none placeholder:opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center space-x-4 mt-8">
                            <Button
                                variant="solid"
                                size="sm"
                                className="!rounded-[24px] border !border-[#B6B6B6] !bg-[#B6B6B6] !text-[#353738] font-nunito text-[13px] not-italic font-medium leading-normal px-[34px] py-[7px]"
                                onClick={() => setShowFilterModal(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="solid"
                                size="sm"
                                className="!rounded-[24px] border !border-[#4880FF] !bg-[#4880FF] text-white font-nunito text-[13px] not-italic font-medium leading-normal px-[34px] py-[7px]"
                                onClick={() => {
                                    // Apply filter logic here
                                    setShowFilterModal(false)
                                }}
                            >
                                Continue
                            </Button>
                        </div>
                    </div>

                    {/* Modal Buttons */}
                </div>
            </Dialog>
        </div>
    )
}

export default PropertyTracking 