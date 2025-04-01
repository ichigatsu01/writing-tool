import { TextField } from '@mui/material'
import React from 'react'

type Text = {
    inputedText: string,
    setInputedText: React.Dispatch<React.SetStateAction<string>>;
}

const InputArea = ({inputedText, setInputedText}: Text) => {

    const inputedTextCharNum = () => {
        const textCountResult: number = Math.max(...inputedText.split(/\n/).map((ele:string) => (
            ele.length
        )))
        return (
        textCountResult ?
        '最大 ' + textCountResult + ' 文字' :
        '未入力です'
        )
    }

    return (
        <div>
            <h1>行数・文字数カウンター</h1>
            <TextField
                multiline
                rows={10}
                sx={{
                    width:'500px'
                }}
                onChange={(e:React.ChangeEvent<HTMLInputElement> ) => setInputedText(e.target.value)}
            />

            {inputedText? (
                <div>
                    <p>
                        {
                        inputedText.match(/\n/g) ?
                        (1 + inputedText.match(/\n/g)!.length) + " 行" :
                        '改行なし'
                        }
                    </p>
                    <p>
                        {inputedTextCharNum()}
                    </p>
                </div> ) : (
                <div>
                    <p>テキストフィールドへ入力すると行数、一行あたりの最大文字列を表示します</p>
                </div>)
            
            }
        </div>
    )
}

export default InputArea
