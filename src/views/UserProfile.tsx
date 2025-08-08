import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Avatar from '@/components/ui/Avatar'
import { HiOutlineUser, HiOutlineUpload } from 'react-icons/hi'

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        address: ''
    })

    const [passwordDetails, setPasswordDetails] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const [profileImage, setProfileImage] = useState<string | null>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleUserDetailsChange = (field: string, value: string) => {
        setUserDetails(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handlePasswordChange = (field: string, value: string) => {
        setPasswordDetails(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSaveUserDetails = () => {
        // Handle save user details logic
        console.log('Saving user details:', userDetails)
    }

    const handleSavePassword = () => {
        // Handle save password logic
        console.log('Saving password:', passwordDetails)
    }

    const handleCancel = () => {
        // Handle cancel logic
        console.log('Canceling changes')
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-4xl  space-y-6">
                {/* User Details Card */}
                <Card className="bg-white rounded-[24px] border-none">
                    <div className="">
                        <h2 className="text-[#4B5674] font-nunito text-[17px] not-italic font-bold leading-none mb-[18px]">
                            User Details
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Left Column - Input Fields */}
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[#2E3A59] font-nunito text-base not-italic font-medium leading-none">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Enter your full name"
                                        value={userDetails.fullName}
                                        onChange={(e) => handleUserDetailsChange('fullName', e.target.value)}
                                        className="w-full mt-[4px] rounded-[10px] border border-[#E3E3E3] bg-white shadow-[0_0_1px_1px_rgba(255,255,255,0)] text-[#727272] font-nunito text-[12px] font-medium focus:ring-[#2779FF] focus:border-[#2779FF]"
                                    />
                                </div>

                                <div>
                                    <label className="text-[#2E3A59] font-nunito text-base not-italic font-medium leading-none">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Enter your phone number"
                                        value={userDetails.phoneNumber}
                                        onChange={(e) => handleUserDetailsChange('phoneNumber', e.target.value)}
                                        className="w-full mt-[4px] rounded-[10px] border border-[#E3E3E3] bg-white shadow-[0_0_1px_1px_rgba(255,255,255,0)] text-[#727272] font-nunito text-[12px] font-medium focus:ring-[#2779FF] focus:border-[#2779FF]"
                                    />
                                </div>

                                <div>
                                    <label className="text-[#2E3A59] font-nunito text-base not-italic font-medium leading-none">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Enter your email address"
                                        value={userDetails.email}
                                        onChange={(e) => handleUserDetailsChange('email', e.target.value)}
                                        className="w-full mt-[4px] rounded-[10px] border border-[#E3E3E3] bg-white shadow-[0_0_1px_1px_rgba(255,255,255,0)] text-[#727272] font-nunito text-[12px] font-medium focus:ring-[#2779FF] focus:border-[#2779FF]"
                                    />
                                </div>

                                <div>
                                    <label className="text-[#2E3A59] font-nunito text-base not-italic font-medium leading-none">
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        placeholder="Enter your address"
                                        value={userDetails.address}
                                        onChange={(e) => handleUserDetailsChange('address', e.target.value)}
                                        className="w-full mt-[4px] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2779FF] focus:border-[#2779FF] resize-none rounded-[10px] border border-[#E3E3E3] bg-white shadow-[0_0_1px_1px_rgba(255,255,255,0)] text-[#727272] font-nunito text-[12px] font-medium"
                                        rows={3}
                                    />
                                </div>
                            </div>

                            {/* Right Column - Profile Image */}
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[#2E3A59] font-inter text-base font-medium">
                                        Profile Image <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex space-y-4 mt-[6px]">
                                        <div>
                                            <Avatar
                                                size={120}
                                                shape="circle"
                                                src={profileImage || "/img/images/userproifelepageprofile.svg"}
                                                className="bg-gray-200"
                                            />
                                        </div>
                                        <div className='ml-[12px]'>
                                            <Button
                                                variant="solid"
                                                size="sm"
                                                className="hover:bg-[#ffffff] active:bg-[#ffffff] !text-[#727272] font-inter text-[10px] not-italic font-normal leading-none border border-[#E3E3E3] !rounded-[24px] !bg-white"
                                                onClick={handleUploadClick}
                                            >
                                                Upload New Photo
                                            </Button>
                                            <input
                                                type="file"
                                                accept="image/png, image/jpeg"
                                                style={{ display: 'none' }}
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                            <p className="text-[#F76161] font-inter text-[12px] not-italic font-semibold leading-[1rem] mt-[6px]">
                                                NOTE: <span className='text-[#F76161] font-inter text-[12px] not-italic font-normal leading-none'>At least 800 x 800 px recommended. JPG or PNG is allowed</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-3 mt-7 border-gray-200">
                            <Button
                                variant="solid"
                                size="sm"
                                onClick={handleCancel}
                                className="hover:bg-[#8080801A] active:bg-[#8080801A] rounded-[4px] !bg-[rgba(128,128,128,0.10)] !text-[#808080] text-center font-poppins text-[14px] not-italic font-medium leading-none px-[14px] py-[5px]"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="solid"
                                size="sm"
                                onClick={handleSaveUserDetails}
                                className="hover:bg-[#4880FF] active:bg-[#4880FF] rounded-[4px] !bg-[#4880FF] !text-[#ffffff] text-center font-poppins text-[14px] not-italic font-medium leading-none px-[14px] py-[5px]"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Change Password Card */}
                <Card className="bg-white rounded-[24px] border-none">
                    <div className="">
                        <h2 className="text-[#4B5674] font-nunito text-[17px] not-italic font-bold leading-none mb-[18px]">
                            Change Password
                        </h2>

                        <div className="space-y-4 max-w-md">
                            <div>
                                <label className="text-[#2E3A59] font-nunito text-base not-italic font-medium leading-none">
                                    Current Password
                                </label>
                                <Input
                                    type="password"
                                    placeholder="Enter your current password"
                                    value={passwordDetails.currentPassword}
                                    onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                                    className="w-full mt-[4px] rounded-[10px] border border-[#E3E3E3] bg-white shadow-[0_0_1px_1px_rgba(255,255,255,0)] text-[#727272] font-nunito text-[12px] font-medium focus:ring-[#2779FF] focus:border-[#2779FF]"
                                />
                            </div>

                            <div>
                                <label className="text-[#2E3A59] font-nunito text-base not-italic font-medium leading-none">
                                    New Password
                                </label>
                                <Input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={passwordDetails.newPassword}
                                    onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                                    className="w-full mt-[4px] rounded-[10px] border border-[#E3E3E3] bg-white shadow-[0_0_1px_1px_rgba(255,255,255,0)] text-[#727272] font-nunito text-[12px] font-medium focus:ring-[#2779FF] focus:border-[#2779FF]"
                                />
                            </div>

                            <div>
                                <label className="text-[#2E3A59] font-nunito text-base not-italic font-medium leading-none">
                                    Confirm Password
                                </label>
                                <Input
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={passwordDetails.confirmPassword}
                                    onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                                    className="w-full mt-[4px] rounded-[10px] border border-[#E3E3E3] bg-white shadow-[0_0_1px_1px_rgba(255,255,255,0)] text-[#727272] font-nunito text-[12px] font-medium focus:ring-[#2779FF] focus:border-[#2779FF]"
                                />
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-end mt-8 ">
                            <Button
                                variant="solid"
                                size="sm"
                                onClick={handleSavePassword}
                                className="hover:bg-[#4880FF] active:bg-[#4880FF] rounded-[4px] !bg-[#4880FF] !text-[#ffffff] text-center font-poppins text-[14px] not-italic font-medium leading-none px-[14px] py-[5px]"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default UserProfile 