import { ChangeEvent, FormEvent, HTMLAttributes, useState } from 'react'
import { ColorBox } from '../color-box'
import { RolePalette, StatusPaletteRecord } from '~/types/@theme.type'
import { ShinyPaper } from '..'

export interface ColorPickerProps extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
    name: RolePalette,
    value?: StatusPaletteRecord,
    onChange: (role: RolePalette, e: ChangeEvent) => void
}

function ColorPicker({ name, value, style, onChange = () => { }, ...rest }: ColorPickerProps) {
    const [input, setInput] = useState("")

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
    }

    function handleManualInput(e: ChangeEvent) {
        const el = e.target as HTMLInputElement
        setInput(el.value)
        onChange(name, e)
    }

    function handleBlur() {
        setInput("")
    }

    return (
        <div className='w-full flex flex-col space-y-2'>
            {/* Label */}
            <h2 className='text-zinc-50 uppercase text-xs'>{name}</h2>
            {/* Main Wrapper */}
            <ShinyPaper className='flex-1 flex space-x-2 items-center justify-between rounded-md overflow-hidden relative bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 p-2'>
                {/* Color Picker Box */}
                <form className='flex space-x-2' onSubmit={handleSubmit}>
                    <div className='overflow-hidden rounded-md w-8 h-8' style={{ background: value?.base || "black" }}>
                        <input name={`color-${name}`} value={value?.base} className='w-8 h-8 scale-150 opacity-0 cursor-pointer' {...rest} type='color' onChange={(e) => onChange(name, e)} />
                    </div>
                    <input name={`color-${name}`} type='text' maxLength={7} onChange={handleManualInput} onBlur={handleBlur} className='w-20 text-sm text-gray-800 px-2 bg-white rounded-md' value={input || value?.base} />
                </form>
                {/* Color Box Wrapper */}
                <div className='w-full h-full flex flex-col space-y-2 md:w-auto md:space-y-0 sm:w-fit-content md:flex-row md:space-x-2'>
                    <ColorBox value={value?.lighter} />
                    <ColorBox value={value?.light} />
                    <ColorBox value={value?.base} />
                    <ColorBox value={value?.dark} />
                    <ColorBox value={value?.darker} />
                </div>
            </ShinyPaper>
        </div>
    )
}

export { ColorPicker }