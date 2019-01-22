class CohortsController < ApplicationController

    def index
        @cohorts = Cohort.all
        render json: @cohorts
      end
    
      def show
        @cohort = Cohort.find(params[:id])
        render json: @cohort
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
    
      def cohorts_params
        
      end
    
end
