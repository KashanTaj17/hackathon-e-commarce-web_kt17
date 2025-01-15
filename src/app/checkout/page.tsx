import Image from "next/image";
import Link from "next/link";
function CheckOut() {
    return (
       
        <div className="min-h-screen bg-white">
        
        <section
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Image_18.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative flex flex-col items-center justify-center h-full">
          <Image
            src="/Logo_0.1.png"
            width={79}
            height={79}
            alt="logoo"
            className="w-[79px] h-[79px]"
          />
          <h1 className="text-4xl font-bold text-black">Checkout</h1>
          <p className="text-black mt-2">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-1">&gt;</span>
            <span>Checkout</span>
          </p>
        </div>
      </section>
    

      <div className="max-w-7xl mx-auto p-6 lg:p-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">

              <label className="block text-black font-medium mb-1 ">First Name
               <input type="text" placeholder=""
               className="w-[211px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label> 
               
               <label className="block text-black font-medium mb-1 ">Last Name
               <input type="text" placeholder=""
                className="w-[211px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
              </div>

              <label className="block text-black font-medium mb-1 ">Company Name (Optional) <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>

              <label className="block text-black font-medium mb-1 ">Country / Region <br></br> <br></br>
              <input type="text" placeholder="Srilanka" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>

              <label className="block text-black font-medium mb-1 ">Street adress <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>

              
              <label className="block text-black font-medium mb-1 ">Town/City <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
             <label className="block text-black font-medium mb-1 ">Province <br></br> <br></br>
              <input type="text" placeholder="Wastern Province" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
              <label className="block text-black font-medium mb-1 ">ZIP Code <br></br> <br></br>
              <input type="text" placeholder="Wastern Province" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
              <label className="block text-black font-medium mb-1 ">Phone <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
              <label className="block text-black font-medium mb-1 ">Email adress <br></br> <br></br>
              <input type="text" placeholder="" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
                      <br /> 
              <label className="block text-black font-medium mb-1 ">
              <input type="text" placeholder="Additional information" 
              className="w-[453px] border border-[#9F9F9F] p-3 rounded-md focus:ring-2 focus:ring-yellow-700 focus:outline-none"/> </label>
        
            </form>
          </div>
  
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6"></h2>
            <div className="border p-6">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Product</span>
                <span className="font-semibold">Subtotal</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-[#9F9F9F]">Asgard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              

              <div className="flex justify-between my-4">
                <span className="font-semibold">Subtotal</span>
                <span className=" text-black">Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between my-4">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
             
              <hr />

              <div className="mt-6 space-y-4 text-[#000000]">
                <div className="">
                  <input type="radio" name="payment" id="bank" defaultChecked />
                  <label htmlFor="bank" className="ml-2 font-medium" >
                    Direct Bank Transfer
                  </label>
                  <p className="text-sm text-[#9F9F9F] mt-2">
                  Make your payment directly into our bank account. Please use 
                  your Order ID as the payment reference. Your order will not be
                   shipped until the funds have cleared in our account.
                  </p>
                </div>

                <div className="text-[#9F9F9F]">
                  <input type="radio" name="payment" id="cod" />
                  <label htmlFor="cod" className="ml-2 font-medium">
                    Direct Bank Transfer
                  </label>
                </div>

                <div className="text-[#9F9F9F]">
                  <input type="radio" name="payment" id="cod" />
                  <label htmlFor="cod" className="ml-2 font-medium">
                    Cash on Delivery
                  </label>
                </div>

                <p className="text-sm text-[#000000] mt-2"> 
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and 
                for other purposes described in our <span className="font-bold">privacy policy.</span>
                </p>

              </div>
              <div className="flex justify-center items-center">
              <button className=" rounded-lg w-[248px] mt-6 py-3 border-2 border-[#000000] text-[#000000] font-bold hover:bg-yellow-700 hover:text-white transition">
                Place order
              </button>
              </div>
            </div>
          </div>
        </div>
  
             <div className="flex flex-wrap justify-between mt-20 items-center p-20 w-full bg-[#F9F1E7]">
             <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
               <Image src="/Trophy_22.png" width={60} height={60} alt="High Quality" />
               <div className="ml-4">
                 <h4 className="font-bold">High Quality</h4>
                 <p className="text-[#898989]">Crafted from top materials</p>
               </div>
             </div>
             <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
               <Image src="/Warranty_23.png" width={60} height={60} alt="Warranty Protection" />
               <div className="ml-4">
                 <h4 className="font-bold">Warranty Protection</h4>
                 <p className="text-[#898989]">Over 2 years</p>
               </div>
             </div>
             <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
               <Image src="/Shipping_24.png" width={60} height={60} alt="Free Shipping" />
               <div className="ml-4">
                 <h4 className="font-bold">Free Shipping</h4>
                 <p className="text-[#898989]">Order over 150 $</p>
               </div>
             </div>
             <div className="flex items-center text-left w-full sm:w-auto mb-4 sm:mb-0">
               <Image src="/Suppor_25.png" width={60} height={60} alt="24/7 Support" />
               <div className="ml-4">
                 <h4 className="font-bold">24 / 7 Support</h4>
                 <p className="text-[#898989]">Dedicated support</p>
               </div>
             </div>
           </div>
           
      </div>
      </div>
    );
  }
  
export default CheckOut;