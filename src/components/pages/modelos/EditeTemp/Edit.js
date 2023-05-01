import React from "react";
import TodoApp from "../Support/Text";
import ImageUploading from "react-images-uploading";
let btn='btn btn-sm btn-outline-primary'
export  function Edit(){
  const  [images,setImages]=React.useState([]); 
  const  maxNumber = 9;
  const  onChange  =  ( imageList ,  addUpdateIndex )  =>  { 
    // dados para enviar 
    console.log(imageList, addUpdateIndex); 
    setImages (imageList); 
  } ;
  return(
    <div className="col-md ">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='a'
        
      >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <div className="row mt-2">
            {imageList.map((image, index) => (
              <div key={index} className="image-item col-2 mt-4 m-3">
                <img src={image['a']} alt="" className="fuild" width={200}/>
                <div className="image-item__btn-wrapper mt-2" id="btns">
                  <TodoApp/>
                  
                </div>
              </div>
              ))} 
            </div>
            <div id="add" className="mt-3 mb-3">
            <button className="btn btn-sm btn-outline-dark" style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
             Clique ou Solte aqui
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-dark" onClick={onImageRemoveAll}>Remover todas imagens</button> 
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )}     

    export function Editer(){
      const  [images,setImages]=React.useState([]); 
      const  maxNumber = 69;
    
      const  onChange  =  ( imageList ,  addUpdateIndex )  =>  { 
        // dados para enviar 
        console.log(imageList, addUpdateIndex); 
        setImages (imageList); 
      } ;
      
        return(
          <div className="col-md ">
            <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                
                <div className="row mt-2">
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item col-sm mt-4 m-3">
                      <img src={image['data_url']} alt="" className="fuild w-100" />
                      <div className="image-item__btn-wrapper mt-2">
                        <TodoApp/>
                        <button className={btn} onClick={() => onImageUpdate(index)}>Atualizar</button>
                        <button className={btn} onClick={() => onImageRemove(index)}>Remover</button>
                      </div>
                    </div>
                   ))} 
                </div>
                <div className="mt-3 mb-3 row">
                <button className={btn} style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
                 Clique ou Solte aqui
                </button>
                
                </div>
              </div>
            )}
          </ImageUploading>
              
            </div>
          )}     
          export function Editerleft(){
            const  [images,setImages]=React.useState([]); 
            const  maxNumber = 69;
          
            const  onChange  =  ( imageList ,  addUpdateIndex )  =>  { 
              // dados para enviar 
              console.log(imageList, addUpdateIndex); 
              setImages (imageList); 
            } ;
            
              return(
                <div className="col-md-8 ">
                  <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      
                      <div className="row mt-2">
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item row col-sm-8 mt-4 m-3">
                            <img src={image['data_url']} alt="" className="fuild w-100 col" />
                            <div className="image-item__btn-wrapper mt-2 col">
                              <TodoApp/>
                              <button className={btn} onClick={() => onImageUpdate(index)}>Atualizar</button>
                              <button className={btn} onClick={() => onImageRemove(index)}>Remover</button>
                            </div>
                          </div>
                         ))} 
                      </div>
                      <div className="mt-3 mb-3 row">
                      <button className={btn} style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
                       Clique ou Solte aqui
                      </button>
                      
                      </div>
                    </div>
                  )}
                </ImageUploading>
                  </div>
                )} 
    