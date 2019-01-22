class TcfsController < ApplicationController

    def index
        @tcfs = Tcf.all
        render json: @tcfs

      end
    
      def show
        @tcf = TCF.find(params[:id])
        render json: @tcf
      end
    
      def new
      end
    
      def create
      end
    
      def edit
      end
    
      def update
      end
    
      def destroy
      end
    
      private
    
      def tcfs_params
        
      end
    
end
