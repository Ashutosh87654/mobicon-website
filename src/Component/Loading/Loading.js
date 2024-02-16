import React, { useEffect, useState } from 'react'
import  './Loading.css';

const Loading = ({children}) => {
    const [text, setText] = useState('');
    const [Loading, setLoading] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const text1="Welcome to...    ";
    const text2="MOBICON DUBAI     "
    useEffect(() => {
      const xyz=async()=>{
        const len=text1.length*2 + text2.length;
        let count=0;
        // for(let i=0;i<text1.length*2;i++)
        let i1=0,j=0,i2=0,j2=0; 
        while(true)
        {
            
            if(i1<=text1.length-1){
                await new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        setText(val=>text1.substring(0,i1));
                        resolve();
                    }, 50);
                })
                
            }
            else if(i2<=text1.length-1 || count<text1.length*2){
                    await new Promise((resolve,reject)=>{
                            setTimeout(() => {
                                    let temp_len= text1.length-i2-1;
                                    setText(text1.substring(0,temp_len));
                                    resolve();
                                }, 50);
                })
                i2++;
            }
            else if(j<=text2.length-1){
                    await new Promise((resolve,reject)=>{
                            setTimeout(() => {
                                    setText(text2.substring(0,j+1));
                                    
                                    resolve();
                                }, 60);
                            })
                            j++;
                }
            else {
                await new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        let temp_len= text1.length-j2-1;
                            setText(text2.substring(0,temp_len));
                            
                            resolve();
                        }, 20);
                    })
                    j2++;
            }
                        
                        i1++;
                        count++;
                        if(j2>text2.length-1)break;
        }
        setLoading(false);
        setOpacity(-1)
        }
      xyz();
    }, [])
    
    
  return (
    <>
        {/* {Loading && */}
         <div className='Loading' style={{opacity:opacity , zIndex:opacity}}>
        <h2 data-text={text}>
        {text}
    </h2>
    </div>
    {/* } */}
    {/* {!Loading && <> */}
        {children}
    {/* </>} */}
    </>
  )
}

export default Loading