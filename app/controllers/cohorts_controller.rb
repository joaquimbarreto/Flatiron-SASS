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
        @cohort = Cohort.new(name: params[:name])
        if @cohort.save
          render json: @cohort
        else
          render json: {error: "Unable to create cohort."}, status: 400
        end
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
